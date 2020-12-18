import express from "express";

export const boardadversaireRouter = express.Router();

boardadversaireRouter.get('/', function(req, res, next) {
    res.render('boardadversaire', {joueur1: res.locals.joueur1, joueur2: res.locals.joueur2});
});