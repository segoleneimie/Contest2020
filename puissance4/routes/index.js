import express from 'express'
import { mySqlConnection } from '../app.js';
export const indexRouter = express.Router();

/* GET users listing. */
indexRouter.get('/', function(req, res, next) {
    res.render('index',{title : 'Bienvenu sur le puissance 4 !'});
});

/**
 * permet de controler la connexion
 */
indexRouter.post('/jeu', (req, res, next)=>{
        const{pseudoConnexion, mdpConnexion} = req.body;
        mySqlConnection.query(`SELECT mdp FROM user WHERE pseudo LIKE '${pseudoConnexion}';`,(err, rows)=>{
            if(rows.length === 0) {
                res.sendStatus(401);
            } else {
                req.queryResult = rows[0];
                console.log('réponse bdd',req.queryResult);
                const passwordCheck = mdpConnexion === req.queryResult.mdp;
                if (passwordCheck) {
                    res.render('jeu',{title: 'Jeu'});
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
indexRouter.post('/',(req, res, next) =>{
    const{pseudo, mdp} = req.body;
    mySqlConnection.query(`INSERT INTO user(pseudo, mdp) VALUES ('${pseudo}', '${mdp}');`,
        (err, rows, field)=>{
        if (err) throw err;
        res.render('jeu',{title: 'Jeu'});
        })

});