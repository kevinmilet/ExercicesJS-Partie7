let divChange = document.querySelector('div');

// ajout des listeners pour les boutons
let bold = document.getElementById('tBold');
bold.addEventListener('click', textBold);

let color = document.getElementById('tColor');
color.addEventListener('click', textColor);

let enlarge = document.getElementById('tEnlarge');
enlarge.addEventListener('click', textEnlarge);

// fonction bouton gras
function textBold() {
    if (divChange.style.fontWeight == 'bold') {
        cancelStyle();
    } else {
        divChange.style.fontWeight = 'bold';
    };
}

// fonction bouton color
function textColor() {
    if (divChange.style.color != 'black') {
        cancelStyle();
    } else {
        divChange.style.color = randomColor();
    };
    
}

// fonction bouton agrandi
function textEnlarge() {
    if (divChange.style.fontSize == 'large') {
        cancelStyle();
    } else {
        divChange.style.fontSize = 'large';
    };
}

// fonction qui annule les changements
function cancelStyle() {
    divChange.style.color = 'black';
    divChange.style.fontSize = 'initial';
    divChange.style.fontWeight = 'normal';
}

// fonction qui choisi une couleur aléatoirement
function randomColor() {
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = '0' + color;
    }
    return '#' + color;
}