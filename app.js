import { checkWinState } from './winState.js';
import { computerPlayer } from './computerPlayer.js';

const results = document.getElementById('results');


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
    if (!playMark[0].classList.contains('user-played') && !playMark[0].classList.contains("computer-played")){
        playMark[0].classList.add('user-played');
        playMark[1].classList.add('user-played');
        if(checkWinState(board,'user-played')){
            //results.style.display = 'flex';
            results.classList.toggle('gameOver');
            results.textContent = 'you won';
        }
        else{
            const computerMove = computerPlayer(board);
            console.log(computerMove);
            board[computerMove][0].classList.add("computer-played");
            }
            if(checkWinState(board, 'computer-played')){
                results.classList.toggle('gameOver');
                results.textContent = 'you lose';
            }

        }
    }


