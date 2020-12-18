import express from "express";
import {mySqlConnection} from "../app.js";

export const vsOrdiRouter = express.Router();

vsOrdiRouter.get('/', function(req, res, next) {
    res.render('vsordi');
});

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

/**
 * création du compte
 */
// vsOrdiRouter.post('/vsordi/boardordi',(req, res, next) =>{
//     const{pseudo, mdp} = req.body;
//     mySqlConnection.query(`INSERT INTO user(pseudo, mdp) VALUES ('${pseudo}', '${mdp}');`,
//         (err, rows, field)=>{
//             if (err) throw err;
//             res.locals = {joueur1 : pseudoConnexion};
//             res.render('boardordi', res.locals);
//         })
//
// });