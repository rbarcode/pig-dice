## Test

Describe: Players()
Test #1 : "It should create an object with properties for pTotalScore, pCurrentScore and isTurn."
Code: player1;
Expected Output: player1 {totalScore: 0, currentScore: 0, isTurn: false}

Test #2 : "It should distinguish multiple instances of Player object as individual objects."
Code: player1 === player2;
Expected Output: false

Describe: Game()
Test #3 : "It should create an object with properties for players, totalScores, activePlayer, die, gameOver.
Code: newGame;
Expected Output: newGame {players: {}, totalScores: {}, activePlayerIndex: 0, die: undefined, gameOver: false}

Describe: Game.prototype.dieRoll()
Test #4 : "It should return a random number between 1 and 6."
Code: game.protopype.die();
Expected Outcome: /some random number between 1 and 6/

Describe: Players.prototype.calcCurrentScore();
Test #5 : "It should add the randomly generated number to the active player's currentscore."
Code: players[0].calcCurrentScore();
Expected Outcome: /0 + the randomly generated number/

Describe: Players.prototype.calcTotalScore();
Test #6 : "It should should add the active player's current score to the active player's total score."
Code: players[0].calcTotalScore();
Expected Outcome: /0 + currentScore/