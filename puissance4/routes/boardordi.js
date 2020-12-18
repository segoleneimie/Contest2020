import express from 'express'
import {
    checkPuissance4,
    ChoseCol,
    ChoseColComputer,
    insertBoardGame,
    insertBoardGameComputer,
    newGame
} from "../public/javascripts/function.js";
export const boardOrdiRouter = express.Router();


boardOrdiRouter.get('/',function(req, res, next) {
    console.log(res.locals);
    let player = res.locals.joueur1 ; // a modifier
    let board = newGame();
    let signPlayer = 'R';
    let signComputer = 'J';
    let columnPlayer = ChoseCol(player);
    let lign1 = insertBoardGame(columnPlayer, board, signPlayer, player);
    let columnComputer = ChoseColComputer();
    let lignComputer = insertBoardGameComputer(columnComputer, board, signComputer);
    while (checkPuissance4(columnPlayer, lign1, board, signPlayer) !== true||
    checkPuissance4(columnComputer, lignComputer, board, signComputer) !== true){
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
    console.log(board);
    res.render('boardordi', {joueur1: res.locals.joueur1, board:board});
});

