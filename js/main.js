import Game from './Game.js';
import GameView from './GameView.js'

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);

// console.log(game.board)
// console.log("My turn is", game.turn);
// game.nextTurn();
// console.log("My turn is", game.turn);
// game.makeMove(3);
// console.log(game.board);
// game.nextTurn();
// game.makeMove(8);
// console.log(game.board)
// gameView.updateBoard(game);


document.querySelector(".restart").addEventListener("click", () => {
    console.log("new game");
    onRestartClick();
})

// create an event listener to make moves
let tiles = document.querySelectorAll(".board-tile");
// loop every single tile
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        console.log('Tile clicked!');
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    // do something
    game.makeMove(i); 
    // make a move
    // change turn
    gameView.updateBoard(game);
 
   
   
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);
