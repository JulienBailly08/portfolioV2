function afficherEtMasquer(item) {
    item.classList.toggle('masque');
    if(premierPortrait.classList.value == 'masque'){
        portrait.classList.toggle('masque');
    }
    premierPortrait.classList.add('masque');
    setTimeout(() => {
        if (item.classList.length == 0) {
            item.classList.toggle('masque');
            portrait.classList.toggle('masque');
        } else {
            item.classList.forEach(element => {
                console.log(element);
                if (element == 'masque') {
                    return;
                } else {
                    item.classList.toggle('masque');
                    portrait.classList.toggle('masque');
                }
            });
        }
    }, 5000);
}

const competences = document.getElementById('competences');
const carousel = document.getElementById('slideshow');
const portrait = document.getElementById('portrait');
const premierPortrait = document.getElementById('premierPortrait');

const declencheurs = [
    competences
];

const zoneAnimees = [
    carousel
];

competences.addEventListener('click', function () {
    afficherEtMasquer(carousel);
});

