import {
  fleetList,
  formListeners,
  removeDragDropListeners,
  setGameplayListeners,
  boardDisplay,
  generateRandomCoords,
  removeGameplayListeners,
  checkHitStatus,
} from "./domManager";
import { Player } from "./player";

let playerOne;
let playerTwo;
function initialSetup() {
  log_text.innerText = "Drag your fleet onto the board and hit start!";
  playerOne = new Player("Player");
  playerTwo = undefined;
  fleetList();
  playerOne.board.setShipsOnBoard();
  formListeners();
}
function startGame() {
  removeDragDropListeners();
  playerTwo = Player.computerPlayerSetup();
  boardDisplay(playerTwo.name);
  setGameplayListeners();
}
function runTurn(event, clickX, clickY) {
  log_text.innerHTML = `<p> Turn: ${playerOne.board.attackCount} </p>`;
  playerTwo.board.dropShell(clickX, clickY);
  event.target.classList.add(checkHitStatus(playerTwo.board.playingBoard[clickX][clickY]));
  attackPlayer();
  if (playerTwo.shipList.every((ship) => ship.isSunk === true)) {
    showWinner(playerOne);
  } else if (playerOne.shipList.every((ship) => ship.isSunk === true)) {
    showWinner(playerTwo);
  }
  function attackPlayer() {
    let result, x, y;
    while (!result) {
      [x, y] = generateRandomCoords();
      result = playerOne.board.dropShell(x, y);
    }
    let hitSpot = document
      .querySelector("#player_one_board")
      .querySelector(`[data-horizontal-pos='${x}']`)
      .querySelector(`[data-vertical-pos='${y}']`);
    hitSpot.classList.add(checkHitStatus(playerOne.board.playingBoard[x][y]));
  }
}
function showWinner(player) {
  removeGameplayListeners();
  log_text.innerText = player.name + ` has won after ${player.board.attackCount} shots.`;
}

initialSetup();

export { playerOne, startGame, runTurn, initialSetup };
