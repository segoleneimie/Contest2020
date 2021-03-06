import mysql from 'mysql';
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bodyParser from "body-parser";


import {indexRouter} from "./routes/index.js";
import {jeuRouter} from "./routes/jeu.js";
import {vsOrdiRouter} from "./routes/vsordi.js";
import {vsAdversaireRouter} from "./routes/vsadversaire.js";
import {boardOrdiRouter} from "./routes/boardordi.js";
import {creationcompteRouter} from "./routes/creationcompte.js";
import  {boardadversaireRouter} from './routes/boardadversaire.js'


const app = express();
const __dirname = path.resolve(path.dirname(''));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/jeu', jeuRouter);
app.use('/vsordi', vsOrdiRouter);
app.use('/vsadversaire', vsAdversaireRouter);
app.use('/boardordi', boardOrdiRouter);
app.use('/creationcompte', creationcompteRouter);
app.use('/boardadversaire', boardadversaireRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export const mySqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  multipleStatements: true,
  database: 'puissance_quatre'
});

mySqlConnection.connect(err => {
  if (err) throw err;
  else {
    app.listen(3000, () => {
      console.log('Server listening...');
    });
  }
});
