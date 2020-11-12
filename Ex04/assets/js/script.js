const pict = document.querySelector('img');

let scaleImg = () => {
    if (pict.style.width == '50%') {
        pict.style.width = '100%';
    } else {
        pict.style.width = '50%';
    };
}

pict.addEventListener('click', scaleImg);