  
const numberButtons = document.querySelectorAll("[data-number]");
const screen = document.querySelector("[screen]");
const operatorButtons = document.querySelectorAll("[data-operator]");

let currentOperation;
let currentNumber;
let firstOperand = "";
let secondOperand = "";



operatorButtons.forEach((button) =>
  button.addEventListener("click", () => chooseOperator(button.textContent)
  )
);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent)
  )
);



function chooseOperator(operator){
    if (operator === "/"){
        currentOperation = "/";
        firstOperand = screen.textContent;
        screen.textContent = "";

    }
    else if (operator === "*"){
        currentOperation = "*";
        firstOperand = screen.textContent;
        screen.textContent = "";

    }
    else if(operator === "−"){
        currentOperation = "−";
        firstOperand = screen.textContent;
        screen.textContent = "";

    }
    else if(operator === "+"){
        currentOperation = "+";
        firstOperand = screen.textContent;
        screen.textContent = "";
    }
    else if(operator === "."){
        screen.textContent += ".";
    }


    else if (operator === "CLEAR"){
        screen.textContent = "0";
        firstOperand = "";
        secondOperand = "";
        currentOperation = "";
    }

    else if (operator === "DELETE"){
        if (screen.textContent.length === 1){
            screen.textContent = "0";
            return;
        }
        str = screen.textContent;
        str = str.substring(0, str.length - 1);
        screen.textContent = str;
    }




    else if(operator === "="){
        secondOperand = screen.textContent;
        
        if (currentOperation === "/"){
            screen.textContent = divide(parseInt(firstOperand), parseInt(secondOperand));
        }

        else if (currentOperation === "*"){
            screen.textContent = multiply(parseInt(firstOperand), parseInt(secondOperand));
        }

        else if(currentOperation === "−"){
            screen.textContent = substract(parseInt(firstOperand), parseInt(secondOperand));
        }

        else if(currentOperation === "+"){
            screen.textContent = add(parseInt(firstOperand), parseInt(secondOperand));
        }
    }
}



function appendNumber(number) {
    if (screen.textContent === "0"){
        screen.textContent = number;
    }
    else{
        screen.textContent += number;
    }
}

  
function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
  
  function divide(a, b) {
    return a / b;
}

window.addEventListener("keydown", setInput);

function setInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === ".") screen.textContent += ".";;
    if (e.key === "Backspace") {
        if (screen.textContent.length === 1){
            screen.textContent = "0";
            return;
        }
        str = screen.textContent;
        str = str.substring(0, str.length - 1);
        screen.textContent = str;
    };
    if (e.key === "Escape") {
        screen.textContent = "0";
        firstOperand = "";
        secondOperand = "";
        currentOperation = "";
    };
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === "=" || e.key === "Enter")
      {
        if (e.key === "/"){
            currentOperation = "/";
            firstOperand = screen.textContent;
            screen.textContent = "";
    
        }
        else if (e.key === "*"){
            currentOperation = "*";
            firstOperand = screen.textContent;
            screen.textContent = "";
    
        }
        else if(e.key === "−"){
            currentOperation = "−";
            firstOperand = screen.textContent;
            screen.textContent = "";
    
        }
        else if(e.key === "+"){
            currentOperation = "+";
            firstOperand = screen.textContent;
            screen.textContent = "";
        }
        else if(e.key === "."){
            screen.textContent += ".";
        }
    
    
        else if (e.key === "CLEAR"){
            screen.textContent = "0";
            firstOperand = "";
            secondOperand = "";
            currentOperation = "";
        }
    
        else if (e.key === "DELETE"){
            if (screen.textContent.length === 1){
                screen.textContent = "0";
                return;
            }
            str = screen.textContent;
            str = str.substring(0, str.length - 1);
            screen.textContent = str;
        }
    
    
    
    
        else if(e.key === "=" || e.key === "Enter"){
            secondOperand = screen.textContent;
            
            if (currentOperation === "/"){
                screen.textContent = divide(parseInt(firstOperand), parseInt(secondOperand));
            }
    
            else if (currentOperation === "*"){
                screen.textContent = multiply(parseInt(firstOperand), parseInt(secondOperand));
            }
    
            else if(currentOperation === "−"){
                screen.textContent = substract(parseInt(firstOperand), parseInt(secondOperand));
            }
    
            else if(currentOperation === "+"){
                screen.textContent = add(parseInt(firstOperand), parseInt(secondOperand));
            }
        }

      };
  }