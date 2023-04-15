
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
let winner = document.querySelector('.winner');
let losser = document.querySelector('.losser');
let main = document.querySelector('.main');
let buttons = document.querySelectorAll('button');

paper.addEventListener('click', function() {
    playRound('paper', computerPlay());
    paper.classList.add('playing');
    paper.addEventListener('transitionend', () => {
        paper.classList.remove('playing');
    });
    player.innerHTML = countP;   //Para mostrar las variables en el cuerpo del documento dentro de la etiqueta span.
    computer.innerHTML = countM;
    if (countP === 5) {
        winner.classList.remove('winner');
        main.style.display = 'none';
    } else if (countM === 5) {
        losser.classList.remove('losser');
        main.style.display = 'none';
    }
});

rock.addEventListener('click', function() {
    playRound('rock', computerPlay());
    rock.classList.add('playing');
    rock.addEventListener('transitionend', () => {    //Se añade un event listener cuando termina la animación y se remove la clase.
        rock.classList.remove('playing');
    });
    player.innerHTML = countP;
    computer.innerHTML = countM;
    if (countP === 5) {
        winner.classList.remove('winner');   //Si gana, se muestra el div "winner" y se esconde el div principal.
        main.style.display = 'none';
    } else if (countM === 5) {
        losser.classList.remove('losser');    //Si pierde, se muestra el div "losser" y se esconden los demás.
        main.style.display = 'none';
    }
});

scissors.addEventListener('click', function() {
    playRound('scissors', computerPlay());
    scissors.classList.add('playing');
    scissors.addEventListener('transitionend', () => {
        scissors.classList.remove('playing');
    });
    player.innerHTML = countP;
    computer.innerHTML = countM;
    if (countP === 5) {
        winner.classList.remove('winner');
        main.style.display = 'none';
    } else if (countM === 5) {
        losser.classList.remove('losser');
        main.style.display = 'none';
    }
});

buttons.forEach(button => button.addEventListener('click', () => {
    location.reload();
}));



