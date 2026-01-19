// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken.
// Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

console.log("opdracht 1");
function getEmailDomain(email) {
    const getDomain = email.lastIndexOf("@");
    return email.substring(getDomain + 1);
}

const domainName = getEmailDomain("a.wiersma@outlook.com");
console.log(domainName)

// dubbel check:
const domainNameTwo = getEmailDomain("t.mellink@novi.nl");
console.log(domainNameTwo)

// Eerst zo gecheckt of ik de juiste methods gebruik:
//      const getDomain = "a.wiersma@outlook.com";
//
//      const domainAdd = getDomain.lastIndexOf("@");
//      console.log(domainAdd);
//      console.log(getDomain.substring(domainAdd +1));

// ========================================================================================================================
/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker),
// een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

console.log("opdracht 2");
function typeOfEmail(email) {
    const getDomain = email.lastIndexOf("@");
    const domainName = email.substring(getDomain + 1);

    if (domainName === "novi-education.nl") {
        return domainName.replaceAll("novi-education.nl", "Student")
    } else if (domainName === "novi.nl") {
        return domainName.replaceAll("novi.nl", "Medewerker")
    } else {
        return "Extern"
    }
}

const getDomainUser = typeOfEmail("novi.nlaapjesk@outlook.com");
console.log(getDomainUser);


// OUTCOME = return student, medewerker of extern
// STAPPEN
// if statement + else if? >> NEE >> replaceAll()
// Toch wel if statement, maar return i.p.v console.log


// ========================================================================================================================
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

console.log("opdracht 3");
