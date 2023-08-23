## Test

Describe: Players()
Test #1 : "It should create an object with properties for pTotalScore, pCurrentScore and isTurn."
Code: player1;
Expected Output: player1 {pTotalScore: 0; pCurrentScore: 0; isTurn: false}

Test #2 : "It should distinguish multiple instances of Player object as individual objects."
Code: player1 === player2;
Expected Output: false