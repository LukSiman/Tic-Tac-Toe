// Gameboard object constructor
const Gameboard = (() => {
    const gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];

    const board = document.querySelector('#board');
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            const square = document.createElement('button');
            square.className = 'square';
            board.appendChild(square);
        }
    }

    return { gameBoard }
})();

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

    const addMarks = () => {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (square.innerHTML !== '') {
                    return;
                }
                markChecker();
                square.innerHTML = currentMark;

                
            })
        })
    }

    return { addMarks }
})();

// Player object contructor
const Player = (name) => {
    return { name }
};

const gameBoard = Gameboard;
const playerOne = Player('Bob');
const playerTwo = Player('Lukas');
const controller = Controller;
controller.addMarks();