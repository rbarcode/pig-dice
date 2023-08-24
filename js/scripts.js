//Business Logic
//Player Constructor ------------
function Player() {
  this.totalScore = 0;
  this.currentScore = 0;
}

//Game Constructor ------------
function Game(player1, player2) {
  this.players = [player1 = new Player(player1), player2 = new Player(player2)];
  this.activePlayer = this.players[0];pio/"("
  this.currentRollValue = 0;
  this.gameOver = false;
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
  this.calcCurrentScore(this.currentRollValue);
  return this.currentRollValue;
}

Game.prototype.changeTurn = function () {
  if (this.activePlayer === this.players[0]) {
    this.activePlayer = this.players[1]
  } else {
    this.activePlayer = this.players[0]
  }
}

Game.prototype.hold = function () {
  this.calcTotalScore();
  this.activePlayer.currentScore = 0;
  this.changeTurn();
}




 //User Interface Logic
