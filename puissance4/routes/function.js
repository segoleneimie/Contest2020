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

