const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let count=0;

export function checkWinState(board){
    //console.log(winCombos);
    for (const winCombo of winCombos) {
        count = 0;
        for (const pos of winCombo){
            if (board[pos][0].classList.contains('user-played' || 'computer-played')) {
                count++
            }
        }
        if (count === 3){

            return true;
        }
    }
    return false;
}