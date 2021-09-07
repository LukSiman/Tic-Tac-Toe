// Gameboard object constructor
const Gameboard = (() => {
    const gameBoard = new Array(9);

    const board = document.querySelector('#board');
    for (let i = 0; i < gameBoard.length; i++) {
        const square = document.createElement('button');
        square.className = 'square';
        board.appendChild(square);
    }

    return { gameBoard }
})();

const gameBoard = Gameboard;

// Game constroller constructor
const Controller = (() => {
    let currentMark;

    const markChecker = () => {
        if (currentMark === 'X') {
            currentMark = 'O';
        } else {
            currentMark = 'X';
        }
        return currentMark;
    }

    let round = 0;

    const addMarks = () => {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (square.innerHTML !== '') {
                    return;
                }
                markChecker();
                square.innerHTML = currentMark;
                updateArray();
                ++round;
                if (!winner) {
                    if (checkWinner() === 1) {
                        console.log('X wins!');
                    } else if (checkWinner() === 0) {
                        console.log('O wins!');
                    }
                }  
                
                if(round === 9 && !winner){
                    console.log("It's a Tie!");
                }
            })
        })
    }

    let playBoard = gameBoard.gameBoard;
    const board = document.querySelector('#board').children;

    const updateArray = () => {        
        let i = 0;
        for (playSquare of board) {
            if (playSquare.innerHTML === 'X') {
                playBoard[i] = 1;
            } else if (playSquare.innerHTML === 'O') {
                playBoard[i] = 0;
            } else {
                playBoard[i] = '';
            }
            i++;
        }
    }

    let winner = false;

    const checkWinner = () => {
        if (playBoard[0] + playBoard[1] + playBoard[2] === 3 ||
            playBoard[0] + playBoard[3] + playBoard[6] === 3 ||
            playBoard[0] + playBoard[4] + playBoard[8] === 3 ||
            playBoard[1] + playBoard[4] + playBoard[7] === 3 ||
            playBoard[2] + playBoard[4] + playBoard[6] === 3 ||
            playBoard[2] + playBoard[5] + playBoard[8] === 3 ||
            playBoard[3] + playBoard[4] + playBoard[5] === 3 ||
            playBoard[6] + playBoard[7] + playBoard[8] === 3
        ) {
            winner = true;
            return 1;
        } else if (
            playBoard[0] + playBoard[1] + playBoard[2] === 0 ||
            playBoard[0] + playBoard[3] + playBoard[6] === 0 ||
            playBoard[0] + playBoard[4] + playBoard[8] === 0 ||
            playBoard[1] + playBoard[4] + playBoard[7] === 0 ||
            playBoard[2] + playBoard[4] + playBoard[6] === 0 ||
            playBoard[2] + playBoard[5] + playBoard[8] === 0 ||
            playBoard[3] + playBoard[4] + playBoard[5] === 0 ||
            playBoard[6] + playBoard[7] + playBoard[8] === 0
        ) {
            winner = true;
            return 0;
        }
    }

    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () =>{        
        for(let playSquare of board){
            playSquare.innerHTML = '';
        }
        round = 0;
        updateArray();
        winner = false;
        currentMark = '';
    })   

    return { addMarks }
})();

// Player object contructor
const Player = (name) => {
    return { name }
};


const playerOne = Player('Bob');
const playerTwo = Player('Lukas');
const controller = Controller;
controller.addMarks();