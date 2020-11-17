// on récupére la balise img dans une contanste pour l'utiliser dans la fonction et dans l'event listener
const pict = document.querySelector('#picture');

// fonction fléchée qui scale l'image au click
let scaleImg = () => {
    if (pict.style.width == '50%') {
        pict.style.width = '100%';
    } else {
        pict.style.width = '50%';
    };
}

// listener qui appele la fonction scaleImg
pict.addEventListener('click', scaleImg);