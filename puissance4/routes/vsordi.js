import express from "express";


export const vsOrdiRouter = express.Router();


vsOrdiRouter.get('/', function(req, res, next) {
    res.render('vsordi');
});