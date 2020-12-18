import express from "express";


export const vsAdversaireRouter = express.Router();


vsAdversaireRouter.get('/', function(req, res, next) {
    res.render('vsadversaire');
});

let player1 = 1 ; // a modifier
let player2 = 2;
let board = newGame();
let signPlayer1 = 'R';
let signPlayer2 = 'J';
let columnPlayer1 = ChoseCol(player1);
let lign1 = insertBoardGame(columnPlayer1, board, signPlayer1, player1);
let columnPlayer2 = ChoseCol(player2);
let lign2 = insertBoardGame(columnPlayer2, board, signPlayer2, player2);
while (checkPuissance4(columnPlayer1, lign1, board, signPlayer1) != true||
checkPuissance4(columnPlayer2, lign2, board, signPlayer2) != true){
    columnPlayer1 = ChoseCol(player1);
    lign1 = insertBoardGame(columnPlayer1, board, signPlayer1, player1);
    if(!checkPuissance4(columnPlayer1, lign1, board, player1)){
        columnPlayer2 = ChoseColComputer();
        lign2 = insertBoardGameComputer(columnPlayer2, board, signPlayer2);
        if (checkPuissance4(columnPlayer2, lign2, board, signPlayer2)){
            console.log("L'ordinateur a gagné");
        }
    }
    else{
        console.log("Vous avez gagné contre l'ordinateur");
    }
}