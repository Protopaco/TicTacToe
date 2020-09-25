const playMark1 = document.getElementById('mark1');
const playMark2 = document.getElementById('mark2');
const space1 = document.getElementById('space1');

function playSpace1(){
    let played = playMark1.classList.contains('user-played');
    if (!played){
        playMark1.classList.add('user-played');
        playMark2.classList.add('user-played');
        console.log('pushed');
    }
}



space1.addEventListener('click', playSpace1);

