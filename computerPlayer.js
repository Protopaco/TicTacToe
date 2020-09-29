

export function computerPlayer(board){
    for (let i=0; i < 9; i++){
        if (!board[i][0].classList.contains('user-played' && 'computer-played')) {
            console.log(board[i][0].classList);
            return i;
        }
    
    }
}