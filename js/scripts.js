//Business Logic
//Player Constructor ------------
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.currentScore = 0;
  this.isTurn = false;
}

//Game Constructor ------------
function Game(player1, player2) {
  this.players = [player1, player2];
  this.activePlayer = this.players[0];
  this.currentRollValue = 0;
  this.gameOver = false;
  this.activePlayer.isTurn = true;
}

Game.prototype.calcCurrentScore = function () {
  if (this.currentRollValue === 1) {
    this.activePlayer.currentScore = 0;
    this.changeTurn();
  } else {
    this.activePlayer.currentScore += this.currentRollValue;
  }
  return this.activePlayer.currentScore;
}

Game.prototype.calcTotalScore = function () {
  this.activePlayer.totalScore += this.activePlayer.currentScore;
  return this.totalScore;
}

Game.prototype.dieRoll = function () {
  this.currentRollValue = Math.floor(Math.random() * 6) + 1;
  this.calcCurrentScore(currentRollValue);
  if ((this.activePlayer.totalScore += this.activePlayer.currentScore) >= 100) {
    this.gameOver = true;
  }
  return this.currentRollValue;
}

Game.prototype.changeTurn = function () {
  if (this.activePlayer === this.players[0]) {
    this.activePlayer = this.players[1]
  } else {
    this.activePlayer = this.players[0]
  }
  this.players.forEach(function (player) {
    player.isTurn = !player.isTurn
  });
}

Game.prototype.hold = function () {
  this.calcTotalScore();
  this.activePlayer.currentScore = 0;
  this.changeTurn();
}


//User Interface Logic

//UI logic incomplete. Scoping errors. dieRoll() in handleDieRoll not defined.



function playerInfoSubmit() {
  const form = document.getElementById("player-input");
  form.addEventListener("submit", handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const player1Name = document.querySelector("input#player1-name").value;
  const player2Name = document.querySelector("input#player2-name").value;
  document.getElementById("p1-name").innerText = player1Name;
  document.getElementById("p2-name").innerText = player2Name;

  let player1 = new Player(player1Name);
  let player2 = new Player(player2Name);
  let newGame = new Game(player1, player2);
  handleDieRoll(player1, player2);
  // function rollDie() {
    // const p1Roll = document.getElementById("player1-roll");
    // p1Roll.addEventListener("click", handleDieRoll);


    // document.getElementById("die-value").innerText = newGame.currentRollValue;
    // const p2Roll = document.getElementById("player2-roll");
    // p2Roll.addEventListener("click", newGame.dieRoll);
    // document.getElementById("die").innerText = newGame.currentRollValue;
  // }


}

function userAction() {
  playerInfoSubmit();
  // rollDie();
}

function handleDieRoll(player1, player1) {
let rollValue = newGame.dieRoll(player1);
document.getElementById("die-value").innerText = rollValue;
}



window.addEventListener("load", userAction);



