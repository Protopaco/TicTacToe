

export function computerPlayer(board){
    for (let i=0; i < 9; i++){
        if (!board[i][0].classList.contains('user-played') && !board[i][0].classList.contains('computer-played')) {
            return i;
        } 
    }
}