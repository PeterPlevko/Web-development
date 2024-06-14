class Ship {
  constructor(name, shipLength) {
    this.name = name;
    this.shipLength = shipLength;
    this.hitTracker = 0;
    this.isSunk = false;
  }
  hit() {
    this.hitTracker++;
    if (this.hitTracker === this.shipLength) {
      this.isSunk = true;
    }
  }
  static shipSet() {
    let set = [
      new Ship("Carrier", 5),
      new Ship("Battleship", 4),
      new Ship("Cruiser", 3),
      new Ship("Submarine", 3),
      new Ship("Destroyer", 2),
    ];
    return set;
  }
}

export { Ship };
