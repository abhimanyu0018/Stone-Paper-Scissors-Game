let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
let score = document.querySelector('.score');

function playerChoice(choice){
    let cChoice = computerChoice();
    computer.setAttribute('src',`./assets/${cChoice}.png`)
    player.setAttribute('src',`./assets/${choice}.png`);
    computer.classList.remove('hidden')
    player.classList.remove('hidden')
    score.classList.remove('hidden')

    scoreBoard(result(choice,cChoice));
    

}

function scoreBoard(res){
    if(res == 'computer'){
          score.textContent = `Computer Win`
        }
        else if(res == 'player')
        {
            score.textContent = `player Win`
    } else{
        score.textContent = `Draw`
    }

}

function computerChoice(){
    let num = parseInt((Math.random()*10)) 
    if(num>=1 && num<=4){
        return 'rock';
    }else if(num>=5 && num<=7)
    {
        return 'paper';
    }
    else{
        return 'scissors';
    }
}


function result(pChoice,comChoice){
    if(pChoice == "rock" && comChoice == "paper")
    {
        return 'computer';
    }else if (pChoice == "rock" && comChoice =="scissors"){
        return 'player';
    }else if(pChoice == "paper" && comChoice == "rock")
    {
        return 'player';
    }else if (pChoice == "paper" && comChoice =="scissors"){
        return 'computer';
    }
    else if(pChoice == "scissors" && comChoice == "rock")
    {
        return 'computer';
    }else if (pChoice == "scissors" && comChoice =="paper"){
        return 'player';
    }
    else {
        return 'draw';
    }
}
