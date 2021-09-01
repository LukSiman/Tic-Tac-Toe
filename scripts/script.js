// Gameboard object constructor
const Gameboard = (() => {
    let gameBoard = ['X', 'O', 'X', 'O', 'O', 'O', 'X', 'X', 'O'];
    return {gameBoard}
})();

// Game constroller constructor
const Controller = (() => {
    const displayBoard = () => {
        let board = document.querySelector('#board');
        const moves = Gameboard.gameBoard;
        for(let i = 0; i < moves.length; i++){
            let square = document.createElement('p');  
            square.innerHTML = moves[i];          
            board.appendChild(square);
        }
    }
    return {displayBoard}
})();

// Player object contructor
const Player = (name) => {
    const logit = () => console.log(name);
    return {logit}
};

Controller.displayBoard();
