// on récupére l'id du bouton et on le stock dans une constante pour l'appeller ensuite
const buttonElement = document.querySelector('#btn');

// fonction fléchée qui récupére les nombres dans deux variables, les multiplies et affiche le résultat
let multiply = () => {
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;
    let result = number1 * number2;
    document.querySelector('#result').innerHTML = 'Le résultat de la multiplication est: ' + result;
};

// Event listener au click sur le bouton pour appeler la fonction
buttonElement.addEventListener('click', multiply);