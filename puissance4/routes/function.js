function newGame() {
    return new Array([[0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ])
}

function ChoseColComputer() {
    return Math.floor(Math.random()*7);
}

function ChoseCol(){

}

function checkColumnFull(colummn, board){
    let nbCaseFull = 0;
    for(let i = 0; i < 6; i++){
        if (board[colummn][i] != 0){
            nbCaseFull ++;
        }
        else{
            nbCaseFull = 0;
        }
    }
    return nbCaseFull;
}

function insertBoardGame(column, board, signPlayer, player){
    let ligne = 0;
    if (checkColumnFull(column, board) != 6){
        let i = 0;
        while (board[column][i] == 0){
            i++;
        }
        board[column][i] = signPlayer;
        ligne = i;
        console.log(board);
    }
    else{
        console.log("veuillez choisir une autre colonne ! ");
        ChoseCol(player);
        insertBoardGame(column, board, signPlayer, player);
    }
    return ligne;
}

function checkLigne(lign, board, signPlayer){
    let nbAligne = 1;
    for (let i = 1; i<4; i++){
        if(board[lign + i][lign] != signPlayer || lign + i > 6){
            for (let j = 1; j < 4 - nbAligne; j++) {
                if (board[lign - i][lign] != signPlayer || lign - i < 0){
                    nbAligne=0;
                }
                else
                {
                    nbAligne++;
                }
            }
        }
        else{
            nbAligne ++;
        }
    }
    return nbAligne;
}

function checkColumn(column, board, signPlayer){
    let nbAligne = 1;
    for (let i = 1; i<4; i++){
        if(board[column][column + i] != signPlayer || column + i > 6){
            for (let j = 1; j < 4 - nbAligne; j++) {
                if (board[column][column - i] != signPlayer || column - i < 0){
                    nbAligne = 0;
                }
                else
                {
                    nbAligne++;
                }
            }
        }
        else{
            nbAligne ++;
        }
    }
    return nbAligne;
}

function checkDiagonal1(lign, column, board, signPlayer){
    let nbAligne = 1;
    for (let i = 1; i<4; i++){
        if(board[column + i][lign + i] != signPlayer || column + i > 6 || lign + i > 6){
            for (let j = 1; j < 4 - nbAligne; j++) {
                if (board[column - i][lign - i] != signPlayer || column - i < 0 || lign - i < 0){
                    nbAligne = 0;
                }
                else
                {
                    nbAligne++;
                }
            }
        }
        else{
            nbAligne ++;
        }
    }
    return nbAligne;
}

function checkDiagonal2(lign, column, board, signPlayer){
    let nbAligne = 1;
    for (let i = 1; i<4; i++){
        if(board[column + i][lign - i] != signPlayer || column + i > 6 || lign - i < 0){
            for (let j = 1; j < 4 - nbAligne; j++) {
                if (board[column - i][lign + i] != signPlayer || column - i < 0 || lign + i > 6){
                    nbAligne = 0;
                }
                else
                {
                    nbAligne++;
                }
            }
        }
        else{
            nbAligne ++;
        }
    }
    return nbAligne;
}

function checkPuissance4(column, lign, board, signPlayer){
    let estPuissance4 = false;
    if(checkColumn(column, board, signPlayer) == 4 ||
    checkLigne(lign, board, signPlayer) == 4 ||
    checkDiagonal1(lign, column, board, signPlayer) == 4 ||
    checkDiagonal2(lign, column, board, signPlayer) == 4){
        estPuissance4 = true
    }
    return estPuissance4;
}