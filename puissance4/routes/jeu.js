import express from "express";


export const jeuRouter = express.Router();

/* GET users listing. */
jeuRouter.get('/', function(req, res, next) {
    let option1 = true;
    let option2 = false;
    res.render('jeu',{option1, option2});}
    );


jeuRouter.get('/vsordi', (req,res,next) => {
    console.log(req);
    console.log(res);
    res.redirect('/vsordi');

} );

jeuRouter.get('/vsadversaire',(req,res,next) => {

    console.log(req);
    console.log(res);
    res.redirect('/vsadversaire')
});