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
    if (moveCount % 2 === 0) {
        this.style.backgroundColor = 'blue';
    } else {
        this.style.backgroundColor = 'red';
    }

    if (this.style.backgroundColor === box1.style.backgroundColor && this.style.backgroundColor === box4.style.backgroundColor && this.style.backgroundColor === box7.style.backgroundColor) {
        if (this.style.backgroundColor === 'blue') {
            player1score += 1;
            alert(`Player 1 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        } else {
            player2score += 1;
            alert(`Player 2 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        }
    } else if (this.style.backgroundColor === box2.style.backgroundColor && this.style.backgroundColor === box5.style.backgroundColor && this.style.backgroundColor === box8.style.backgroundColor) {
        if (this.style.backgroundColor === 'blue') {
            player1score += 1;
            alert(`Player 1 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        } else {
            player2score += 1;
            alert(`Player 2 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        }
    } else if (this.style.backgroundColor === box3.style.backgroundColor && this.style.backgroundColor === box6.style.backgroundColor && this.style.backgroundColor === box9.style.backgroundColor) {
        if (this.style.backgroundColor === 'blue') {
            player1score += 1;
            alert(`Player 1 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        } else {
            player2score += 1;
            alert(`Player 2 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        }
    } else if (this.style.backgroundColor === box1.style.backgroundColor && this.style.backgroundColor === box2.style.backgroundColor && this.style.backgroundColor === box3.style.backgroundColor) {
        if (this.style.backgroundColor === 'blue') {
            player1score += 1;
            alert(`Player 1 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        } else {
            player2score += 1;
            alert(`Player 2 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        }
    } else if (this.style.backgroundColor === box4.style.backgroundColor && this.style.backgroundColor ===  box5.style.backgroundColor && this.style.backgroundColor === box6.style.backgroundColor) {
        if (this.style.backgroundColor === 'blue') {
            player1score += 1;
            alert(`Player 1 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        } else {
            player2score += 1;
            alert(`Player 2 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        }
    } else if (this.style.backgroundColor === box7.style.backgroundColor && this.style.backgroundColor === box8.style.backgroundColor && this.style.backgroundColor === box9.style.backgroundColor) {
        if (this.style.backgroundColor === 'blue') {
            player1score += 1;
            alert(`Player 1 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        } else {
            player2score += 1;
            alert(`Player 2 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        }
    } else if (this.style.backgroundColor === box1.style.backgroundColor && this.style.backgroundColor === box5.style.backgroundColor && this.style.backgroundColor === box9.style.backgroundColor) {
        if (this.style.backgroundColor === 'blue') {
            player1score += 1;
            alert(`Player 1 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        } else {
            player2score += 1;
            alert(`Player 2 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        }
    } else if (this.style.backgroundColor === box3.style.backgroundColor && this.style.backgroundColor === box5.style.backgroundColor && this.style.backgroundColor === box7.style.backgroundColor) {
        if (this.style.backgroundColor === 'blue') {
            player1score += 1;
            alert(`Player 1 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        } else {
            player2score += 1;
            alert(`Player 2 wins! Player 1 Score: ${player1score}, Player 2 Score: ${player2score}`);
        }
    }
    moveCount += 1;
}

