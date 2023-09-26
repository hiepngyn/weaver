var startWord = currentWord = "test" 
var endWord = "blah"

function CheckingValidity(guess){
    if (guess.length() != endWord.length) return false;
    else return true;
}

function CreateGuessedBox(rowVal,guessWord){
    const container = document.getElementById('container');
    const row = document.createElement('div');

    row.className = 'row';

    for(let x = 0; x != 4; x++){
        const box = document.createElement('div');
        box.className = "greyBox";
        box.innerHTML = guessWord[x].toUpperCase();

        row.appendChild(box);
    } 
    container.appendChild(row);
    container.id = "row-"+rowVal
}


function CreateWhitedBox(rowVal){
    const container = document.getElementById('container');
    const row = document.createElement('div');

    row.className = 'row';

    for(let x = 0; x != 4; x++){
        const box = document.createElement('div');
        box.className = "whiteBox";
        box.innerHTML = "h"
        row.appendChild(box);
    } 
    container.appendChild(row);
    container.id = "row-"+rowVal
}

function CreateContainer(){
    const newDiv = document.createElement('div')
    newDiv.id = "container"

    document.body.appendChild(newDiv)
}

function Game(){

}


