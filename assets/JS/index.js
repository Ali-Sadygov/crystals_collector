const target = document.querySelector('.target');
var score = document.querySelector('.score');
const images1 = document.querySelector('.images1');
const images2 = document.querySelector('.images2');
const images3 = document.querySelector('.images3');
const images4 = document.querySelector('.images4');
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const reset = document.querySelector('.reset');

var sekil1 = Math.floor(Math.random() * 2) + 1;
var sekil2 = Math.floor(Math.random() * 3) + 2;
var sekil3 = Math.floor(Math.random() * 4) + 3;
var sekil4 = Math.floor(Math.random() * 5) + 4;
var random = Math.floor(Math.random() * 50) + 20;

target.innerHTML = random;
num = 0;n
var wins1 = 0;
var losses1 = 0;

images1.addEventListener('click', function img1() {
    num += sekil1;
    score.innerHTML = num;
    A();
})
images2.addEventListener('click', function img2() {
    num += sekil2;
    score.innerHTML = num;
    A();
})
images3.addEventListener('click', function img3() {
    num += sekil3;
    score.innerHTML = num;
    A();
})
images4.addEventListener('click', function img4() {
    num += sekil4;
    score.innerHTML = num;
    A();
})
var True = true;
function A() {
    if (num === random && True === true){
        wins1++;
        wins.innerHTML = `Wins: ${wins1}`
        sekil1 = 0;
        sekil2 = 0;
        sekil3 = 0;
        sekil4 = 0;
        True = false;
    } else if (num > random && True === true) {
        losses1++;
        losses.innerHTML = `Losses: ${losses1}`
        sekil1 = 0;
        sekil2 = 0;
        sekil3 = 0;
        sekil4 = 0;
        True = false;
    }
}
reset.addEventListener('click', function(){
    True = true;
    num = 0;
    score.innerHTML = num;
    sekil1 = Math.floor(Math.random() * 2) + 1;
    sekil2 = Math.floor(Math.random() * 3) + 2;
    sekil3 = Math.floor(Math.random() * 4) + 3;
    sekil4 = Math.floor(Math.random() * 5) + 4;
    random = Math.floor(Math.random() * 50) + 20;
    target.innerHTML = random;
})