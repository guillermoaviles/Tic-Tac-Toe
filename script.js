// Target each box.
const box1 = document.querySelector('.box-one');
const box2 = document.querySelector('.box-two');
const box3 = document.querySelector('.box-three');
const box4 = document.querySelector('.box-four');
const box5 = document.querySelector('.box-five');
const box6 = document.querySelector('.box-six');
const box7 = document.querySelector('.box-seven');
const box8 = document.querySelector('.box-eight');
const box9 = document.querySelector('.box-nine');

// Add event listeners to each box.
box1.addEventListener('click', makeMove);
box2.addEventListener('click', makeMove);
box3.addEventListener('click', makeMove);
box4.addEventListener('click', makeMove);
box5.addEventListener('click', makeMove);
box6.addEventListener('click', makeMove);
box7.addEventListener('click', makeMove);
box8.addEventListener('click', makeMove);
box9.addEventListener('click', makeMove);

// Move tracker.
let moveCount = 0;

// Make move function. Marks a move on a corresponding box.
function makeMove() {
    moveCount += 1;
    if (moveCount % 2 === 0) {
        this.style.backgroundColor = 'blue';
    } else {
        this.style.backgroundColor = 'red';
    }
}