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

                if (round === 9 && !winner) {
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
    resetBtn.addEventListener('click', () => {
        for (let playSquare of board) {
            playSquare.innerHTML = '';
        }
        round = 0;
        updateArray();
        winner = false;
        currentMark = '';
        if(document.querySelector('#selectorForm')){
            deleteForm();
        }        
        changeNameForm = false;
    })


    changeNameForm = false;
    const changeBtn = document.querySelector('#change');
    changeBtn.addEventListener('click', () => {
        changeName();
    });

    const changeName = () => {
        if (changeNameForm) {
            changeNameForm = false;
            deleteForm();
        } else {
            changeNameForm = true;
            createForm();
        }
    }

    const createForm = () => {
        let buttons = document.querySelector('#buttons');
        let nameSelector = document.createElement('div');
        nameSelector.setAttribute('id', 'selectorForm');

        let nameChangeText = document.createElement('p');
        nameChangeText.innerHTML = 'Select player to change:';

        let changeOne = document.createElement('button');
        changeOne.innerHTML = 'Player 1';

        let changeTwo = document.createElement('button');
        changeTwo.innerHTML = 'Player 2';

        nameSelector.appendChild(nameChangeText);
        nameSelector.appendChild(changeOne);
        nameSelector.appendChild(changeTwo);
        buttons.appendChild(nameSelector);

        changeOne.addEventListener('click', () =>{
            createInputForm();
            takeInput(playerOne, 1);
        });

        changeTwo.addEventListener('click', () =>{
            createInputForm();
            takeInput(playerTwo, 2);
        });
    }

    const deleteForm = () => {
        let nameSelector = document.querySelector('#selectorForm');
        const buttons = document.querySelector('#buttons');
        buttons.removeChild(nameSelector);
    }

    const createInputForm = () =>{
        let form = document.querySelector('#selectorForm');
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'inputForm');
        form.appendChild(input);
    }

    const takeInput = (player, number) => {
        let form = document.querySelector('#selectorForm');
        let input = document.querySelector('#inputForm');

        input.addEventListener('keypress', (e) =>{
            if(e.key === 'Enter'){
                player = Player(input.value, number);
                form.removeChild(input); 
                deleteForm();
                changeNameForm = false;               
            }            
        });
    }

    return { addMarks }
})();

// Player object contructor
const Player = (name, number) => {

    let playerNumber = number == 1 ? 'One' : 'Two';

    let player = document.querySelector(`#player${playerNumber}`);

    player.innerHTML = name;

    // use different players for moves?

    return {}
};

let playerOne = Player('Player X', 1);
let playerTwo = Player('Player O', 2);
const controller = Controller;
controller.addMarks();