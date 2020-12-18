import express from "express";
import {mySqlConnection} from "../app.js";


export const vsAdversaireRouter = express.Router();


vsAdversaireRouter.get('/', function(req, res, next) {
    res.render('vsadversaire');
});

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
