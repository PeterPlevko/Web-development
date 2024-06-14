import { generateRandomCoords, drawBoard } from "./domManager";
import { GameBoard } from "./gameBoard";
import { Ship } from "./ship";

class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
    this.shipList = Ship.shipSet();
  }

  static computerPlayerSetup() {
    const playerTwo = new Player("HAL");
    playerTwo.board.humanOwner = false;
    drawBoard(playerTwo.board.playingBoard, playerTwo.board.humanOwner);
    while (playerTwo.board.placedShips.length !== 5) {
      addRandomShip();
    }
    return playerTwo;
    function addRandomShip() {
      let randomPos = [];
      let randomShip = [];
      do {
        randomShip = playerTwo.shipList[Math.floor(Math.random() * 5)];
      } while (playerTwo.board.placedShips.find((s) => s.shipObject.name == randomShip.name));
      let keepTrying = true;
      do {
        randomPos = generateRandomCoords();
        keepTrying = playerTwo.board.addShipToList(
          randomShip,
          randomPos,
          Math.floor(Math.random() * 2)
        );
      } while (keepTrying);
    }
  }
}

export { Player };
