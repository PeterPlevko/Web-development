import { drawBoard } from "./domManager";

class GameBoard {
  constructor() {
    this.attackCount = 0;
    this.playingBoard = GameBoard.setBlankBoard();
    this.placedShips = [];
    this.humanOwner = true;
  }

  static setBlankBoard() {
    let horizontal = [];
    for (let i = 0; i < 10; i++) {
      let vertical = [];
      for (let j = 0; j < 10; j++) {
        vertical[j] = { ship: null, hitMarker: false };
      }
      horizontal[i] = vertical;
    }
    return horizontal;
  }

  addShipToList(shipObject, pos, orientation) {
    let shipEntry = { shipObject: shipObject, position: pos, isVertical: orientation };
    if (this.iterateShipLength(shipEntry) === false) {
      return false;
    }
    this.placedShips.push(shipEntry);
    this.setShipsOnBoard();
  }

  setShipsOnBoard() {
    this.placedShips.forEach((ship) => {
      let vertCoord = ship.position[0];
      let horCoord = ship.position[1];
      for (let i = 0; i < ship.shipObject.shipLength; i++) {
        this.playingBoard[vertCoord][horCoord].ship = ship.shipObject;
        ship.isVertical ? vertCoord++ : horCoord++;
      }
    });
    drawBoard(this.playingBoard, this.humanOwner);
  }

  iterateShipLength(targetShip, switchRemove = false) {
    let vertPos = targetShip.position[0];
    let horPos = targetShip.position[1];
    let lengthCheck = targetShip.isVertical ? vertPos : horPos;
    if (lengthCheck + targetShip.shipObject.shipLength > this.playingBoard.length) return false;
    for (let i = 0; i < targetShip.shipObject.shipLength; i++) {
      if (!switchRemove && this.playingBoard[vertPos][horPos].ship !== null) {
        return false;
      }
      if (switchRemove) this.playingBoard[vertPos][horPos].ship = null;
      targetShip.isVertical ? vertPos++ : horPos++;
    }
    return true;
  }

  dropShell(x, y) {
    let hitLocation = this.playingBoard[x][y];
    if (hitLocation.hitMarker === true) return false;
    hitLocation.hitMarker = true;
    if (hitLocation.ship !== null && hitLocation.ship.isSunk === false) {
      hitLocation.ship.hit();
      log_text.innerHTML += this.humanOwner
        ? "<p> The enemy hit one of your ships!  </p>"
        : "<p> You hit an enemy ship!  </p>";
    } else {
      log_text.innerHTML += this.humanOwner
        ? "<p> The enemy shot missed.  </p>"
        : "<p> Your shot missed.  </p>";
    }
    this.attackCount++;
    return true;
  }
}

export { GameBoard };
