import express from 'express'
import {mySqlConnection} from "../app.js";
export const boardOrdiRouter = express.Router();



boardOrdiRouter.get('/',function(req, res, next) {
    console.log(res.locals);
    res.render('boardordi', {joueur1: res.locals.joueur1});
});

boardOrdiRouter.post('/',(req, res, next) =>{
    const{pseudo, mdp} = req.body;
    mySqlConnection.query(`INSERT INTO user(pseudo, mdp) VALUES ('${pseudo}', '${mdp}');`,
        (err, rows, field)=>{
            if (err) throw err;
            res.locals = {joueur1 : pseudo};
            res.render('boardordi', res.locals);
        })

});