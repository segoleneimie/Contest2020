import express from 'express'
import bcrypt from 'bcrypt'
import { mySqlConnection } from '../app.js';
export const indexRouter = express.Router();

/* GET users listing. */
indexRouter.get('/', function(req, res, next) {
    res.render('',{title : 'Bienvenu sur le puissance 4 !'});
});

indexRouter.get('/', (req, res, next)=>{
        mySqlConnection.query(`SELECT mdp FROM user WHERE pseudo LIKE '${req.params.login}';`,(err, rows)=>{
            if(rows.length === 0) {
                res.sendStatus(401);
            } else {
                req.queryResult = rows[0];
                next();
            }
        });

    },
    async (req, res)=>{
        const passwordCheck = await bcrypt.compare(req.body.password, req.queryResult.password);
        if (passwordCheck) {
            const token = jwt.sign(
                {password: req.body.password, login: req.body.login},
                'ilegflegl==zoemrgrekg!!morfhier'
            );
            res.json({token});
        } else {
            res.sendStatus(401);
        }
    });