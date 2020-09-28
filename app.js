
const playMark1 = [document.getElementsByClassName('space1')[0],
                   document.getElementsByClassName('space1')[1]];

const playMark2 = [document.getElementsByClassName('space2')[0],
                   document.getElementsByClassName('space2')[1]];

const playMark3 = [document.getElementsByClassName('space3')[0],
                   document.getElementsByClassName('space3')[1]];
                   
const playMark4 = [document.getElementsByClassName('space4')[0],
                   document.getElementsByClassName('space4')[1]];

const playMark5 = [document.getElementsByClassName('space5')[0],
                   document.getElementsByClassName('space5')[1]];

const playMark6 = [document.getElementsByClassName('space6')[0],
                   document.getElementsByClassName('space6')[1]];

const playMark7 = [document.getElementsByClassName('space7')[0],
                   document.getElementsByClassName('space7')[1]];
                   
const playMark8 = [document.getElementsByClassName('space8')[0],
                   document.getElementsByClassName('space8')[1]];

const playMark9 = [document.getElementsByClassName('space9')[0],
                   document.getElementsByClassName('space9')[1]];



const space1 = document.getElementById('space1');
const space2 = document.getElementById('space2');
const space3 = document.getElementById('space3');
const space4 = document.getElementById('space4');
const space5 = document.getElementById('space5');
const space6 = document.getElementById('space6');
const space7 = document.getElementById('space7');
const space8 = document.getElementById('space8');
const space9 = document.getElementById('space9');

function playSpace1(){
    if (!playMark1[0].classList.contains('user-played' || "computer-played")){
        playMark1[0].classList.add('user-played');
        playMark1[1].classList.add('user-played');
    }
}

function playSpace2(){
    if (!playMark2[0].classList.contains('user-played' || "computer-played")){
        playMark2[0].classList.add('user-played');
        playMark2[1].classList.add('user-played');
    }
}

function playSpace3(){
    if (!playMark3[0].classList.contains('user-played' || "computer-played")){
        playMark3[0].classList.add('user-played');
        playMark3[1].classList.add('user-played');
    }
}

function playSpace4(){
    if (!playMark4[0].classList.contains('user-played' || "computer-played")){
        playMark4[0].classList.add('user-played');
        playMark4[1].classList.add('user-played');
    }
}

function playSpace5(){
    if (!playMark5[0].classList.contains('user-played' || "computer-played")){
        playMark5[0].classList.add('user-played');
        playMark5[1].classList.add('user-played');
    }
}

function playSpace6(){
    if (!playMark6[0].classList.contains('user-played' || "computer-played")){
        playMark6[0].classList.add('user-played');
        playMark6[1].classList.add('user-played');
    }
}

function playSpace7(){
    if (!playMark7[0].classList.contains('user-played' || "computer-played")){
        playMark7[0].classList.add('user-played');
        playMark7[1].classList.add('user-played');
    }
}

function playSpace8(){
    if (!playMark8[0].classList.contains('user-played' || "computer-played")){
        playMark8[0].classList.add('user-played');
        playMark8[1].classList.add('user-played');
    }
}

function playSpace9(){
    if (!playMark9[0].classList.contains('user-played' || "computer-played")){
        playMark9[0].classList.add('user-played');
        playMark9[1].classList.add('user-played');
    }
}



space1.addEventListener('click', playSpace1);
space2.addEventListener('click', playSpace2);
space3.addEventListener('click', playSpace3);
space4.addEventListener('click', playSpace4);
space5.addEventListener('click', playSpace5);
space6.addEventListener('click', playSpace6);
space7.addEventListener('click', playSpace7);
space8.addEventListener('click', playSpace8);
space9.addEventListener('click', playSpace9);


