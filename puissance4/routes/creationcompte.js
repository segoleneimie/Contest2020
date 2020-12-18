import express from "express";
import {mySqlConnection} from "../app.js";

export const creationcompteRouter = express.Router();

creationcompteRouter.get('/', function(req, res, next) {
    res.render('creationcompte');
});

creationcompteRouter.post('/',(req, res, next) =>{
    const{pseudo, mdp} = req.body;
    mySqlConnection.query(`INSERT INTO user(pseudo, mdp) VALUES ('${pseudo}', '${mdp}');`,
        (err, rows, field)=>{
            if (err) throw err;
            res.locals = {joueur1 : pseudo};
            res.render('index');
        })

});