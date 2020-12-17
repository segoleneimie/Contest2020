import express from "express";

export const jeuRouter = express.Router();

/* GET users listing. */
jeuRouter.get('/', function(req, res, next) {
    res.render('users',{title});}
    );
