import express from "express";
import {mySqlConnection} from "../app.js";

export const vsOrdiRouter = express.Router();

vsOrdiRouter.get('/', function(req, res, next) {
    res.render('vsordi');
});

<<<<<<< HEAD
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
=======
/**
 * permet de controler la connexion
 */
vsOrdiRouter.post('/', (req, res, next)=>{
        const{pseudoConnexion, mdpConnexion} = req.body;
        mySqlConnection.query(`SELECT mdp FROM user WHERE pseudo LIKE '${pseudoConnexion}';`,(err, rows)=>{
            if(rows.length === 0) {
                res.sendStatus(401);
            } else {
                req.queryResult = rows[0];
                console.log('réponse bdd',req.queryResult);
                const passwordCheck = mdpConnexion === req.queryResult.mdp;
                if (passwordCheck) {
                    res.locals = {joueur1 : pseudoConnexion};
                    res.render('boardordi', res.locals);
                } else {
                    res.sendStatus(401);
                }

            }
        });
    }
);
>>>>>>> 285f20336e82d07fb2d2fb86fa7a055837636f43
