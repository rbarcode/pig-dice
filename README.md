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