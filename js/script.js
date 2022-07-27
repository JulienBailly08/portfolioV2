function afficherEtMasquer(item) {
    item.classList.toggle('masque');
    portrait.classList.toggle('masque');

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

const geek = document.getElementById('geek');
const carousel = document.getElementById('slideshow');
const portrait = document.getElementById('portrait');

const declencheurs = [
    geek
];

const zoneAnimees = [
    carousel
];

geek.addEventListener('click', function () {
    afficherEtMasquer(carousel);
});

