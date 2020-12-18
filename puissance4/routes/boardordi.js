import express from 'express'
import {mySqlConnection} from "../app.js";
export const boardOrdiRouter = express.Router();



boardOrdiRouter.get('/',function(req, res, next) {
    console.log(res.locals);
    res.render('boardordi', {joueur1: res.locals.joueur1});
});

