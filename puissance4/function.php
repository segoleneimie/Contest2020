<?php
/**   améliorations :
 *  1 - mettre en place une ia
 *  2 - ajouter un compteur permettant de connaître le nombre de coup joué
 *  3 - récupérer la position du dernier jeton
 *  4 - déclenche la verif du puissance 4 quand 4 jetons de la même couleur

 */


// fonction à lancer à chaque début de jeu,
    function newGame(){
        $board = [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            ];
        return $board;
    }


    // Connexion base de données à faire
    function scorePlayer($player, $score){
        $score += 1;
        return $score;
    }

    // à revoir
    // ajouter une vérif si colonne déjà rempli
    function ChoseCol($player){
        '<form action="" method="GET">';
        '<label name="numberColumn"> Choisir numéro colonne entre 1 et 7 '. $player. '</label>';
        '<input name="numberColumn">';
        '<button type="submit">Valider</button>';
        $column = $_GET['numberColumn'];
        return $column;
    }

//     function ChoseColComputer(){
//         return random_int(0,6);
//     }

//     function checkColumnComplete($column, $board){
//         $nbCaseComplete = 0;
//         // a revoir remplacer par des whiles
//         for ($i = 0; $i<7; $i++) {
//             if ($board[$column][$i] != 0) {
//                 $nbCaseComplete += 1;
//             }
//         }
//         return $nbCaseComplete;
//     }

//    function insertBoardGame($column, $board, $signPlayer, $player){
//        $ligne = 0;
//        if(checkColumnComplete($column, $board) != 6){
//            for ($i = 6; $i>=0; $i++) {
//
//                // a revoir
//                if ($board[$column][$i] == 0) {
//                    $board[$column][$i] = $signPlayer;
//                    $ligne = $i;
//                    echo $board;
//                }
//            }
//        }
//        // si colonne complète, choisir une autre colonne
//        else {
//            echo 'Colonne complete veuillez en choisir une autre';
//            $column = ChoseCol($player);
//            insertBoardGame($column, $board, $signPlayer, $player);
//        }
//        return $ligne;
//    }
//    function insertBoardGameComputer($column, $board, $signPlayer){
//            $ligne = 0;
//            if(checkColumnComplete($column, $board) != 6){
//                for ($i = 6; $i>=0; $i++) {
//
//                    // a revoir
//                    if ($board[$column][$i] == 0) {
//                        $board[$column][$i] = $signPlayer;
//                        $ligne = $i;
//                        echo $board;
//                    }
//                }
//            }
//            // si colonne complète, choisir une autre colonne
//            else {
//                echo 'Colonne complete veuillez en choisir une autre';
//                $column = ChoseColComputer();
//                insertBoardGameComputer($column, $board, $signPlayer);
//            }
//            return $ligne;
//    }

    // permet de mettre le signe associé au joueur, utiliser pour fonction insertBoardGame
    function signPlayer($player){
        $sign = 0;
        if($player == 1){
            $sign = 'R';
        }
        else{
            $sign ='J';
        }
        return $sign;
    }

    function puissance4($column, $lign, $board, $signPlayer, $player){
        $estpuissance4 = false;
        if(checkPuissance4($column, $lign, $board, $signPlayer)){
            $estpuissance4 = true;
        }
        scorePlayer($player);
        return $estpuissance4;
    }

//    function checkLigne($lign, $board, $signPlayer){
//        $nbAligne = 1;
//        for($i = 1; $i < 4; $i++){
//            if($board[$lign + $i][$lign] != $signPlayer || $lign + $i > 6){
//                for ($i = 1 ; $i < 4-$nbAligne; $i++){
//                    if($board[$lign - $i][$lign] != $signPlayer || $lign + $i < 0) {
//                        $nbAligne = 0;  //peut mieux faire
//                    }
//                    else{
//                        $nbAligne ++;
//                    }
//                }
//            }
//            else{
//                $nbAligne ++;
//            }
//        }
//        return $nbAligne;
//    }
//
//    function checkColumn($column, $board, $signPlayer){
//        $nbAligne = 1;
//        for($i = 1; $i < 4; $i++){
//            if($board[$column][$column + $i] != $signPlayer || $column + $i > 6){
//                for ($i = 1 ; $i < 4-$nbAligne; $i++){
//                    if($board[$column][$column -$i] != $signPlayer || $column + $i < 0) {
//                        $nbAligne = 0;  //peut mieux faire
//                    }
//                    else{
//                        $nbAligne ++;
//                    }
//                }
//            }
//            else{
//                $nbAligne ++;
//            }
//        }
//        return $nbAligne;
//    }

//    function checkDiagonal1($lign, $column, $board, $signPlayer){
//        $nbAligne = 1;
//        for($i = 1; $i < 4; $i++){
//            if($board[$column + $i][$lign + $i] != $signPlayer || $column + $i > 6 || $lign + $i > 6){
//                for ($i = 1 ; $i < 4-$nbAligne; $i++){
//                    if($board[$column - $i][$lign - $i] != $signPlayer || $column + $i < 0 || $lign + $i < 0) {
//                        $nbAligne = 0;  //peut mieux faire
//                    }
//                    else{
//                        $nbAligne ++;
//                    }
//                }
//            }
//            else{
//                $nbAligne ++;
//            }
//        }
//        return $nbAligne;
//    }
//
//    function checkDiagonal2($lign, $column, $board, $signPlayer){
//        $nbAligne = 1;
//        for($i = 1; $i < 4; $i++){
//            if($board[$column + $i][$lign - $i] != $signPlayer || $column + $i > 6 || $lign + $i > 6){
//                for ($i = 1 ; $i < 4-$nbAligne; $i++){
//                    if($board[$column - $i][$lign + $i] != $signPlayer || $column + $i < 0 || $lign + $i < 0) {
//                        $nbAligne = 0;  //peut mieux faire
//                    }
//                    else{
//                        $nbAligne ++;
//                    }
//                }
//            }
//            else{
//                $nbAligne ++;
//            }
//        }
//        return $nbAligne;
//    }
//
//    function checkPuissance4($column, $lign, $board, $signPlayer){
//        $estPuissance4 = false;
//        if(checkColumn($column, $board, $signPlayer) == 4 || checkLigne($lign, $board, $signPlayer) == 4 ||
//            checkDiagonal1($lign, $column, $board, $signPlayer) == 4 || checkDiagonal2($lign, $column, $board, $signPlayer) == 4 ){
//            $estPuissance4 = true;
//        }
//        return $estPuissance4;
//
//    }

import express from "express";


export const vsAdversaireRouter = express.Router();


vsAdversaireRouter.get('/', function(req, res, next) {
    res.render('vsadversaire');
});

let player1 = 1 ; // a modifier
let player2 = 2;
let board = newGame();
let signPlayer1 = 'R';
let signPlayer2 = 'J';
let columnPlayer1 = ChoseCol(player1);
let lign1 = insertBoardGame(columnPlayer1, board, signPlayer1, player1);
let columnPlayer2 = ChoseCol(player2);
let lign2 = insertBoardGame(columnPlayer2, board, signPlayer2, player2);
while (checkPuissance4(columnPlayer1, lign1, board, signPlayer1) != true||
checkPuissance4(columnPlayer2, lign2, board, signPlayer2) != true){
    columnPlayer1 = ChoseCol(player1);
    lign1 = insertBoardGame(columnPlayer1, board, signPlayer1, player1);
    if(!checkPuissance4(columnPlayer1, lign1, board, player1)){
        columnPlayer2 = ChoseColComputer();
        lign2 = insertBoardGameComputer(columnPlayer2, board, signPlayer2);
        if (checkPuissance4(columnPlayer2, lign2, board, signPlayer2)){
            console.log("L'ordinateur a gagné");
        }
    }
    else{
        console.log("Vous avez gagné contre l'ordinateur");
    }
}

let lignComputer = insertBoardGameComputer(columnComputer, board, signComputer);
