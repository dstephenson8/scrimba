

let player1Score = 0;
let player2Score = 0;
let player1Turn = true; // if false then its player twos turn

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function endGame(){
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}
function reset(){
    player1Score=0;
    player2Score=0;
    player1Turn=true;
    player1Dice.textContent='-';
    player2Dice.textContent='-';
    player1Scoreboard.textContent=player1Score;
    player2Scoreboard.textContent=player2Score;
    player1Dice.classList.add('active');
    player2Dice.classList.remove('active')    
    message.textContent="Player 1 Turn";
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
    


}

rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random()*7);
   
    if(player1Turn === true){
        player1Score += randomNumber;
        message.innerText = 'Player 2 Turn';
        player1Scoreboard.innerText = player1Score;
        player1Dice.innerText = randomNumber;
        player2Dice.classList.add('active');
        player1Dice.classList.remove('active')
       
    }else{
        player2Score += randomNumber;
        message.innerText = 'Player 1 Turn';
        player2Scoreboard.innerText = player2Score;
        player2Dice.innerText = randomNumber;
        player1Dice.classList.add('active');
        player2Dice.classList.remove('active')
        
    }

    if(player1Score >= 20){
        message.innerText = 'Player 1 Won!!!'
        endGame();
    }else if (player2Score >= 20){
        message.innerText = 'Player 2 Won!!!'
        endGame();
    }
    player1Turn = !player1Turn;


})

resetBtn.addEventListener('click', reset)


