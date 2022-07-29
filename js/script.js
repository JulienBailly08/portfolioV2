const competences = document.getElementById('competences');
const carousel = document.getElementById('slideshow');
const portrait = document.getElementById('portrait');
const premierPortrait = document.getElementById('premierPortrait');
const formulaire = document.getElementById('formulaire');
const afficherForm = document.getElementById('afficherForm');


competences.addEventListener('click', function () {
    if (formulaire.classList.value == '' && portrait.classList.value == 'masqueflag') {
        return;
    }
    if (formulaire.classList.value == '') {
        formulaire.classList.add('masque');
    }
    if (portrait.classList.value == 'masqueflag') {
        return;
    }
    if (premierPortrait.classList.value == '') {
        premierPortrait.classList.add('masque');
    }
    if (portrait.classList.value == '') {
        portrait.classList.add('masqueflag');
    }
    carousel.classList.remove('masque');
    setTimeout(() => {
        carousel.classList.add('masque');
        if (formulaire.classList.value == '') {
            formulaire.classList.add('masque');
        }
        if (portrait.classList.value == 'masqueflag') {
            portrait.classList.remove('masqueflag');
        }
        if (portrait.classList.value == 'masque') {
            portrait.classList.remove('masque');
        }
    }, 5000);
});

const verifMasquage = [carousel, portrait, premierPortrait];
afficherForm.addEventListener('click', function () {
    verifMasquage.forEach(balise => {
        if (balise.classList.value == '') {
            balise.classList.add('masque');
        }
    });
    formulaire.classList.remove('masque');
});

/**
 * 
 * Gestion form
 */

const submitButton = document.getElementById("submit");
const infoMail = document.getElementById("infoMail");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const mail = document.getElementById("mail");
const text = document.getElementById("text");

/**
 * Fonction regex :'(
 */

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateFirstname(firstname) {
    const re = /[a-zA-Z]+[a-zA-Z]+?-?[a-zA-Z]+/;
    return re.test(firstname);

}
function validateLastname(lastname) {
    const re = /[a-zA-Z]+[a-zA-Z]/;
    return re.test(lastname);
}

submitButton.addEventListener('click', function (envoi) {
    envoi.preventDefault();
    let firstnameOK = true;
    let lastnameOK = true;
    let mailOK = true;
    let textOK = true;
    console.log(firstname.value);

    if (!validateFirstname(firstname.value)) {
        firstnameOK = false;
        firstname.classList.add("formWrong");
        setTimeout(function () {
            firstname.classList.remove("formWrong");
        }, 2500);

    }
    if (!validateLastname(lastname.value)) {
        lastnameOK = false;
        lastname.classList.add("formWrong");
        setTimeout(function () {
            lastname.classList.remove("formWrong");
        }, 2500);

    }
    if (!validateEmail(mail.value)) {
        mailOK = false;
        mail.classList.add("formWrong");
        setTimeout(function () {
            mail.classList.remove("formWrong");
        }, 2500);

    }
    if (text.value == '') {
        textOK = false;
        text.classList.add("formWrong");
        setTimeout(function () {
            text.classList.remove("formWrong");
        }, 2500);
    }

    if (firstnameOK && lastnameOK && mailOK && textOK) {
        sendDatas();
    }

    function sendDatas()
    {
        alert('Feu !!!');
    }

});