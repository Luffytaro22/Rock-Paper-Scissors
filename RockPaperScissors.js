
var countP = 0;
var countM = 0;
const computerPlay = () => {
    const game = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * game.length);
    return game[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
    const p = playerSelection.toLowerCase();
    const c = computerSelection.toLowerCase();
    if(p === "paper" && c === 'rock' || p === 'rock' && c === 'scissors' || p === 'scissors' && c === 'paper'){
        return countP++;
    }else if(p === c){
        countP = countP;
        countM = countM;
    }else{
        return countM++;
    }
};
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let result = document.getElementById('result');


paper.addEventListener('click', function() {
    playRound('paper', computerPlay())
    player.innerHTML = countP;   //Para mostrar las variables en el cuerpo del documento dentro de la etiqueta span.
    computer.innerHTML = countM;
    if (countP === 5) {
        location.href='Game/Winner.html';
    } else if (countM === 5) {
        location.href='Game/Losser.html';
    }
});

rock.addEventListener('click', function() {
    playRound('rock', computerPlay())
    player.innerHTML = countP;
    computer.innerHTML = countM;
    if (countP === 5) {
        location.href='Game/Winner.html';
    } else if (countM === 5) {
        location.href='Game/Losser.html';
    }
});

scissors.addEventListener('click', function() {
    playRound('scissors', computerPlay())
    player.innerHTML = countP;
    computer.innerHTML = countM;
    if (countP === 5) {
        location.href='Game/Winner.html';
    } else if (countM === 5) {
        location.href='Game/Losser.html';
    }
});



