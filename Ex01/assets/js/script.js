const buttonElement = document.getElementById('btn');

// on crée une fonction qui récupére les valeurs des inputs et qui appelle la fonction multiply pour afficher le résultat
buttonElement.onclick = function() {
    // on récupére les valeurs des imputs et on les converti en entier
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    // on appelle la fonction multiply et on stocke le résultat dans une variable
    let result = multiply(number1, number2);

    // on affiche le résultat
    document.getElementById('result').innerHTML = `Le résultat de la multiplication est: ${result}`;

}

// fonction qui multiplie les deux nombres et renvoie le résultat
function multiply(number1, number2) {
    return number1 * number2;
}