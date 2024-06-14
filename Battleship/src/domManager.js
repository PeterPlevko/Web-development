import { initialSetup, playerOne, runTurn, startGame } from ".";

function drawBoard(board, owner) {
  let boardDiv = owner
    ? document.getElementById("player_one_board")
    : document.getElementById("player_two_board");
  boardDiv.innerHTML = "";
  board.forEach((row, rI) => {
    let tableRow = document.createElement("tr");
    tableRow.dataset.horizontalPos = rI;
    row.forEach((col, cI) => {
      let tableCol = document.createElement("td");
      tableCol.dataset.verticalPos = cI;
      tableCol.classList.add("water_tile");
      if (owner && col.ship) {
        tableCol.classList.add("ship_piece");
        tableCol.draggable = true;
        tableCol.dataset.name = col.ship.name;
      }
      tableRow.appendChild(tableCol);
    });
    boardDiv.appendChild(tableRow);
  });
}
function checkHitStatus(hitSpot) {
  let hitDisplayClass = "";
  if (hitSpot.hitMarker) {
    if (hitSpot.ship !== null) {
      hitDisplayClass = "hit_tile";
    } else {
      hitDisplayClass = "missed_tile";
    }
  }
  return hitDisplayClass;
}

function fleetList() {
  let listDom = document.getElementById("player_one_ships");
  let table = document.createElement("table");
  listDom.innerHTML = "";
  playerOne.shipList.forEach((ship) => {
    if (playerOne.board.placedShips.find((s) => s.shipObject.name == ship.name)) return;
    let draggableShip = document.createElement("tr");
    let shipName = document.createElement("th");
    draggableShip.draggable = true;
    draggableShip.classList.add("ship_piece");
    for (let i = 0; i < ship.shipLength; i++) {
      draggableShip.appendChild(document.createElement("td"));
    }
    shipName.innerText = `${ship.name}`;
    shipName.colSpan = "5";
    draggableShip.dataset.name = ship.name;
    table.appendChild(shipName);
    table.appendChild(draggableShip);
    listDom.appendChild(table);
  });
  setDragDropListeners(playerOne);
}

function setDragDropListeners() {
  document.querySelectorAll(".ship_piece").forEach((sp) => {
    sp.addEventListener("dragstart", dragStartHandler, false);
  });
  player_one_board.addEventListener("dragover", preventDef, false);
  player_one_ships_div.addEventListener("dragover", preventDef, false);
  player_one_board.addEventListener("drop", dropHandler, false);
  player_one_ships_div.addEventListener("drop", dropHandler, false);
}
function removeDragDropListeners() {
  document.querySelectorAll(".ship_piece").forEach((sp) => {
    sp.removeEventListener("dragstart", dragStartHandler, false);
  });
  player_one_board.removeEventListener("dragover", preventDef, false);
  player_one_ships_div.removeEventListener("dragover", preventDef, false);
  player_one_board.removeEventListener("drop", dropHandler, false);
  player_one_ships_div.removeEventListener("drop", dropHandler, false);
}

function setGameplayListeners() {
  document.querySelectorAll("#player_two_board .water_tile").forEach((tile) => {
    tile.addEventListener("click", fireClickHandler, { once: true });
  });
}

function removeGameplayListeners() {
  document.querySelectorAll("#player_two_board .water_tile").forEach((tile) => {
    tile.removeEventListener("click", fireClickHandler);
  });
}
function preventDef(e) {
  e.preventDefault();
}

function dragStartHandler(e) {
  e.dataTransfer.setData("name", e.target.dataset.name);
  e.dataTransfer.setData("origin", e.target.classList);
}

function dropHandler(e) {
  e.preventDefault();
  let originSwitch = e.dataTransfer.getData("origin").includes("water_tile");
  let droppedName = e.dataTransfer.getData("name");
  const shipObject = playerOne.shipList.find((sh) => sh.name == droppedName);
  if (e.target.classList.contains("water_tile")) {
    if (originSwitch) dropOnList();
    dropOnBoard();
  }
  if (e.target.classList.contains("ship_list") && originSwitch) dropOnList();
  fleetList();
  //
  function dropOnBoard() {
    let targetPosition = [
      +e.target.parentElement.dataset.horizontalPos,
      +e.target.dataset.verticalPos,
    ];
    if (
      playerOne.board.addShipToList(shipObject, targetPosition, vertical_toggle.checked) === false
    )
      "That position already occupied or not long enough for the selected ship.";
  }
  function dropOnList() {
    let pickedObject = playerOne.board.placedShips.find((x) => x.shipObject.name == droppedName);
    playerOne.board.placedShips.splice(playerOne.board.placedShips.indexOf(pickedObject), 1);
    playerOne.board.iterateShipLength(pickedObject, true);
    playerOne.board.setShipsOnBoard();
  }
}
function boardDisplay(p2Name) {
  player_one_ships_div.style.display = "none";
  player_two.style.display = "block";
  player_name_form.style.display = "none";
  startup_button.style.display = "none";
  p2_board_title.innerText = p2Name + " Sea.";
  log_text.innerText = "Click a spot on the enemy board to fire a shot.";
}

function fireClickHandler(e) {
  const clickX = +e.target.parentElement.dataset.horizontalPos;
  const clickY = +e.target.dataset.verticalPos;
  runTurn(e, clickX, clickY);
}

function formListeners() {
  player_name_form.value = playerOne.name;
  setName(playerOne.name);
  startup_form.addEventListener("submit", (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    if (playerOne.board.placedShips.length !== 5) {
      log_text.innerText = "Place all your ships before starting.";
      log_text.classList.add("alert");
      setTimeout(() => {
        log_text.classList.remove("alert");
      }, 3000);
      return;
    } else if (playerOne.board.placedShips.length === 5) {
      startGame();
    }
  });
  player_name_form.addEventListener("change", (e) => setName(e.target.value));
  reset_button.addEventListener("click", resetGame);
  function setName(name) {
    if (name === "") return;
    playerOne.name = name;
    p1_board_title.innerText = playerOne.name + " Sea.";
  }
}
function resetGame(e) {
  e.preventDefault();
  player_one_ships_div.style.display = null;
  player_two.style.display = null;
  player_name_form.style.display = null;
  startup_button.style.display = null;
  initialSetup();
}

function generateRandomCoords(boardSize = 10) {
  let coords = [Math.floor(Math.random() * boardSize), Math.floor(Math.random() * boardSize)];
  return coords;
}

export {
  drawBoard,
  fleetList,
  setDragDropListeners,
  formListeners,
  removeDragDropListeners,
  boardDisplay,
  setGameplayListeners,
  removeGameplayListeners,
  generateRandomCoords,
  checkHitStatus,
};
