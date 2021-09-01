// Gameboard object constructor
const Gameboard = (() => {
    let gameBoard = ['X', 'O', 'X', 'O', 'O', 'O', 'X', 'X', 'O'];
    return {gameBoard}
})();

// Game constroller constructor
const Controller = (() => {

})();

// Player object contructor
const Player = (name) => {
    const logit = () => console.log(name);
    return {logit}
};