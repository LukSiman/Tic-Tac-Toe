// Gameboard object constructor
const Gameboard = (() => {
    let gameBoard = [];
})();

// Game constroller constructor
const Controller = (() => {
    
})();

// Player object contructor
const Player = (name) => {
    const logit = () => console.log(name);    
    return {logit}
};