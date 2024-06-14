const fieldElements = document.querySelectorAll(".field");
const playerTurn = document.querySelectorAll(".turn").item(0);
const restartButton = document.querySelectorAll("#restart").item(0);
let board = ["", "", "", "", "", "", "", "", ""];
let count=0;

restartButton.addEventListener("click", (e) => {
    fieldElements.forEach((field) =>{
        field.textContent = "";
    })
    board = ["", "", "", "", "", "", "", "", ""];
    playerTurn.textContent = "Player X's turn"
    playerSymbol = "X";
    count=0;
  });


let playerSymbol = "X"


function checkWin(player){
    // player = 'X' or 'O'
  
    const horizontal = [0,3,6].map(i=>{return[i,i+1,i+2]});
    const vertical = [0,1,2].map(i=>{return[i,i+3,i+6]});
    const diagonal = [[0,4,8],[2,4,6]];
  
    var allwins = [].concat(horizontal).concat(vertical).concat(diagonal);
    
    let res = allwins.some(indices => { 
    return board[indices[0]] == player && board[indices[1]] == player && board[indices[2]] == player})
    return res;
  }


fieldElements.forEach((field) =>
    field.addEventListener("click", (e) => {

        if(field.textContent != "")
        {
            return;
        }
        
        if(playerSymbol=="X"){
            field.textContent = "X";
           
            playerTurn.textContent = "Player O's turn"
            board[e.target.id] = playerSymbol;
            count +=1 
            if(checkWin("X")){

                playerTurn.textContent = "Player X won"
 
                return;
            }
            playerSymbol = "O";
        }
       else{
            field.textContent = "O" 
            playerTurn.textContent = "Player X's turn"
            board[e.target.id] = playerSymbol;
            count += 1
            if(checkWin("O")){

                playerTurn.textContent = "Player O won"

                return
            }
            playerSymbol = "X"
        }

        if(count==9){
            playerTurn.textContent = "draw"

        }

        

    })
    
);