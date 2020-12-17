import express from "express";


export const vsAdversaireRouter = express.Router();


vsAdversaireRouter.get('/', function(req, res, next) {
    res.render('vsadversaire');
});