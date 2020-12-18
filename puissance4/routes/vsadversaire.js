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

vsAdversaireRouter.post('/', (req,res,next)=>{
    const{pseudoConnexion1, mdpConnexion1, pseudoConnexion2, mdpConnexion2} = req.body;
    mySqlConnection.query(`SELECT mdp FROM user WHERE pseudo LIKE '${pseudoConnexion1}';
                                SELECT mdp FROM user WHERE pseudo LIKE '${pseudoConnexion2}'`,(err, rows)=>{
        if(rows.length === 0) {
            res.sendStatus(401);
        } else {
            req.queryResult1 = rows[0][0];
            req.queryResult2 = rows[1][0];
            console.log('réponse bdd',req.queryResult1, req.queryResult2);
            const passwordCheck1 = mdpConnexion1 === req.queryResult1.mdp;
            const passwordCheck2 = mdpConnexion2 === req.queryResult2.mdp;
            console.log('passwordCheck',passwordCheck1,passwordCheck2);

            if (passwordCheck1 && passwordCheck2) {
                console.log('render');
                res.locals = {joueur1 : pseudoConnexion1, joueur2 : pseudoConnexion2};
                res.render('boardadversaire', res.locals);
            } else {
                res.sendStatus(401);
            }

        }
    });
});
