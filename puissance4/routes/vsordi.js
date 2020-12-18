import express from "express";


export const vsOrdiRouter = express.Router();


vsOrdiRouter.get('/', function(req, res, next) {
    res.render('vsordi');
});

let player = 1 ; // a modifier
let board = newGame();
let signPlayer = 'R';
let signComputer = 'J';
let columnPlayer = ChoseCol(player);
let lign1 = insertBoardGame(columnPlayer, board, signPlayer, player);
let columnComputer = ChoseColComputer();
let lignComputer = insertBoardGameComputer(columnComputer, board, signComputer);
while (checkPuissance4(columnPlayer, lign1, board, signPlayer) != true||
checkPuissance4(columnComputer, lignComputer, board, signComputer) != true){
    columnPlayer = ChoseCol(player);
    lign1 = insertBoardGame(columnPlayer, board, signPlayer, player);
    if(!checkPuissance4(columnPlayer, lign1, board, player)){
        columnComputer = ChoseColComputer();
        lignComputer = insertBoardGameComputer(columnComputer, board, signComputer);
        if (checkPuissance4(columnComputer, lignComputer, board, signComputer)){
            console.log("L'ordinateur a gagné");
        }
    }
    else{
        console.log("Vous avez gagné contre l'ordinateur");
    }
}
