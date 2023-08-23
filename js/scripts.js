function Player() {
  this.totalScore = 0;
  this.currentScore = 0;
  this.isTurn = false;
}


function Game(player1, player2) {
  this.players = [player1 = new Player(player1), player2 = new Player(player2)];
  this.totalScore = [player1.totalScore, player2.totalScore]
  this.activePlayer = this.players[0];
  this.die = 0;
  this.gameOver = false;
}