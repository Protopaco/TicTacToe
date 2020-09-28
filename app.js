import { checkWinState } from './winState.js';

let space = '';
let spaceCount = 0;
let board = [];


for (let i=0; i<9; i++){
    space = 'space' + spaceCount;
    board.push([
        document.getElementsByClassName(space)[1],
        document.getElementsByClassName(space)[2]
    ])
    document.getElementsByClassName(space)[0].addEventListener('click', function(){
        playSpace(board[i]);
    });
    spaceCount++;
}

function playSpace(playMark){
    if (!playMark[0].classList.contains('user-played' || "computer-played")){
        playMark[0].classList.add('user-played');
        playMark[1].classList.add('user-played');
        if(checkWinState(board)){
            alert("you won!");
        }
        else{
            console.log('no winner yet')
        }
    }



}

