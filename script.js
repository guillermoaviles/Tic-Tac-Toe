// Target each box.
const box1 = document.querySelector('#one');
const box2 = document.querySelector('#two');
const box3 = document.querySelector('#three');
const box4 = document.querySelector('#four');
const box5 = document.querySelector('#five');
const box6 = document.querySelector('#six');
const box7 = document.querySelector('#seven');
const box8 = document.querySelector('#eight');
const box9 = document.querySelector('#nine');

// Add event listeners to each box.
box1.addEventListener('click', play);
box2.addEventListener('click', play);
box3.addEventListener('click', play);
box4.addEventListener('click', play);
box5.addEventListener('click', play);
box6.addEventListener('click', play);
box7.addEventListener('click', play);
box8.addEventListener('click', play);
box9.addEventListener('click', play);

// Move tracker.
let moveCount = 0;
let player1score = 0;
let player2score = 0;

// Make move function. Marks a move on a corresponding box.
function play() {
    moveCount += 1;
    if (moveCount % 2 === 0) {
        this.style.backgroundColor = 'blue';
    } else {
        this.style.backgroundColor = 'red';
    }

    if (box1.style.backgroundColor === box4.style.backgroundColor && box1.style.backgroundColor === box7.style.backgroundColor) {
        if (this.style.backgroundColor === 'red') {
            player1score += 1;
            console.log('Player 1 wins');
        } else {
            player2score += 1;
            console.log('Player 2 wins');
        }
    } else if (box2.style.backgroundColor === box5.style.backgroundColor && box2.style.backgroundColor === box8.style.backgroundColor) {
        if (this.style.backgroundColor === 'red') {
            player1score += 1;
            console.log('Player 1 wins');
        } else {
            player2score += 1;
            console.log('Player 2 wins');
        }
    } else if (box3.style.backgroundColor === box6.style.backgroundColor && box3.style.backgroundColor === box9.style.backgroundColor) {
        if (this.style.backgroundColor === 'red') {
            player1score += 1;
            console.log('Player 1 wins');
        } else {
            player2score += 1;
            console.log('Player 2 wins');
        }
    } else if (box1.style.backgroundColor === box2.style.backgroundColor && box1.style.backgroundColor === box3.style.backgroundColor) {
        if (this.style.backgroundColor === 'red') {
            player1score += 1;
            console.log('Player 1 wins');
        } else {
            player2score += 1;
            console.log('Player 2 wins');
        }
    } else if (box4.style.backgroundColor === box5.style.backgroundColor && box4.style.backgroundColor === box6.style.backgroundColor) {
        if (this.style.backgroundColor === 'red') {
            player1score += 1;
            console.log('Player 1 wins');
        } else {
            player2score += 1;
            console.log('Player 2 wins');
        }
    } else if (box7.style.backgroundColor === box8.style.backgroundColor && box7.style.backgroundColor === box9.style.backgroundColor) {
        if (this.style.backgroundColor === 'red') {
            player1score += 1;
            console.log('Player 1 wins');
        } else {
            player2score += 1;
            console.log('Player 2 wins');
        }
    } else if (box1.style.backgroundColor === box5.style.backgroundColor && box1.style.backgroundColor === box9.style.backgroundColor) {
        if (this.style.backgroundColor === 'red') {
            player1score += 1;
            console.log('Player 1 wins');
        } else {
            player2score += 1;
            console.log('Player 2 wins');
        }
    } else if (box3.style.backgroundColor === box5.style.backgroundColor && box3.style.backgroundColor === box7.style.backgroundColor) {
        if (this.style.backgroundColor === 'red') {
            player1score += 1;
            console.log('Player 1 wins');
        } else {
            player2score += 1;
            console.log('Player 2 wins');
        }
    }
}

