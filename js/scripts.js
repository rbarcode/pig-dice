function Player() {
  this.totalScore = 0;
  this.currentScore = 0;
  this.isTurn = false;
}

// Player.prototype.calcCurrentScore = function (currentRollValue) {
//   if (currentRollValue === 1) {
//     this.currentScore = 0;
//     Game.changeTurn();
//   } else {
//     this.currentScore += currentRollValue;
//   }
//   return this.currentScore;
// }

Player.prototype.calcTotalScore = function () {
  this.totalScore += this.currentScore;
  return this.totalScore;
}

function Game(player1, player2) {
  this.players = [player1 = new Player(player1), player2 = new Player(player2)];
  this.totalScore = [player1.totalScore, player2.totalScore];
  this.activePlayer = this.players[0];
  this.currentRollValue = 0;
  this.gameOver = false;
}

Game.prototype.dieRoll = function () {
  this.currentRollValue = Math.floor(Math.random() * 6) + 1;
  // this.activePlayer.calcCurrentScore(this.currentRollValue);
  // return this.currentRollValue;
  if (this.currentRollValue === 1) {
    this.currentScore = 0;
    this.changeTurn();
  } else {
    currentScore += this.currentRollValue; //fix this and get it to connect to player
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
    player.isTurn = !player.isTurn //should only have one true... it changing both to true.
  });

}

// Game.prototype.hold = function () {
//   this.activePlayer.calcTotalScore();
// }

//this.activePlayer.changeTurn();
// this.activePlayer.isTurn = true
// this.activePlayer = 