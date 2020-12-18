import express from 'express'
export const indexRouter = express.Router();

/* GET  */
indexRouter.get('/', function(req, res, next) {
    res.render('index',{title : 'Bienvenu sur le puissance 4 !'});
});

