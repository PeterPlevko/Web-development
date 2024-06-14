console.log("start");


function giveRandom(){
    var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
    return computerChoice;
    }

function oneRound(choice1, choice2){
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};

function changeUI(result){

/* 
    let btn = document.querySelector('#winorloose');
    btn.textContent = `clovek: ${human} pocitac: ${computer}`
    btn.style.fontSize = "50px";
 */
    if(human == 5){
        let win = document.querySelector('#winorloose');
        win.textContent = "Human won"
        win.style.fontSize = "50px";

        human = computer = 0;
        let btn = document.querySelector('#score');
        btn.textContent = `clovek: ${human} pocitac: ${computer}`
        btn.style.fontSize = "50px";
        return
    }
    else if (computer == 5){
        let win = document.querySelector('#winorloose');
        win.textContent = "Computer won"
        win.style.fontSize = "50px";

        human = computer = 0;
        let btn = document.querySelector('#score');
        btn.textContent = `clovek: ${human} pocitac: ${computer}`
        btn.style.fontSize = "50px";
        return
    }


    if (result=="You win!"){
        human++
    }
    else if (result=="You lose! Try again."){
        computer++
    }
    else{
        human++;
        computer++;
    }

    let btn = document.querySelector('#score');
    btn.textContent = `clovek: ${human} pocitac: ${computer}`
    btn.style.fontSize = "50px";
}

let computer = 0, human = 0;

let result;
let btn = document.querySelector('#rock');
btn.addEventListener('click', function (e) {
    result = oneRound("rock", giveRandom())
    changeUI(result);
});

btn = document.querySelector('#paper');
btn.addEventListener('click', function (e) {
    result = oneRound("paper", giveRandom())
    changeUI(result);
});

btn = document.querySelector('#scissors');
btn.addEventListener('click', function (e) {
    result = oneRound("scissors", giveRandom())
    changeUI(result);
});



