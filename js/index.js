/*
    Rough outline.
    Bugs include:
        - issues with dividing by 0, Nan is left behind in statement
        - when evaluation is left over, you can click a number, then a function, and have issues.
    
    Currently able to do basic arithmetic without bugs. 
    Need to add output to screen, currently scrictly using console.
*/

const numberpadButtons  = document.getElementsByClassName("numpad-item");
const functionButtons   = document.getElementsByClassName("function-item");

let statement = [];

let currentValue = "";
let secondValue = "";
let evaluation = "";

let output = "";

let Calculator = {
    
    clear: function() {
        console.log("in clear");
        statement = [];
        console.log(statement);
    },

    add: function(value1, value2) {
        return value1 + value2;
    },


    subtract: function(value1, value2) {
        return value1 - value2;
    },

    multiply: function(value1, value2) {
        return value1 * value2;
    },

    divide: function(value1, value2) {
        if (value2 === 0) {
            console.log("ERROR: Cannot divide by 0")
            return null;
        }

        return value1 / value2;
    },

    evaluate: function() {
        console.log("in evaluate");
        switch(statement[1]) {
            case "+":   evaluation = Calculator.add(statement[0], statement[2]);        break;     
            case "-":   evaluation = Calculator.subtract(statement[0], statement[2]);   break; 
            case "*":   evaluation = Calculator.multiply(statement[0], statement[2]);   break;
            case "/":   evaluation = Calculator.divide(statement[0], statement[2]);     break;     
        }
    },

}


function isEquals(value) {
    if (value === "=") {
        return true;
    }

    return false;
}

function validDividend() {

    console.log ("in validDividend");
    if (statement[1] === "/" && Number.parseFloat(currentValue) === 0) {
        return false;
    }

    return true;
}

// Set up function buttons
for (let i = 0; i < functionButtons.length; i++) {
    functionButtons[i].addEventListener("click", function() {

        if (functionButtons.textContent = "AC") {
            Calculator.clear();
            currentValue = "";
            output = "";
            return null;
        }
        if (functionButtons. textContent = "Del") {
            --currentValue;
            // fix output here
        }



        console.log("clicked a function");


        if (statement.length === 0 && currentValue.length === 0) {
            return null;
        }

        if (isEquals(functionButtons[i].textContent) && validDividend()) {
            if (statement.length <= 1) {
                return null;
            }

            statement.push(Number.parseFloat(currentValue));
            Calculator.evaluate();
            Calculator.clear();
            
            statement.push(Number.parseFloat(evaluation));

            currentValue = "";
            console.log("evaluation: ", statement);
            return null;
        }

        if (currentValue.length > 0) { 

            if (statement.length > 1) {
                console.log("in statement == 3 ?")
                statement.push(Number.parseFloat(currentValue));
                Calculator.evaluate();
                Calculator.clear();

                console.log("evaluation before pushing: ", evaluation);
                statement.push(Number.parseFloat(evaluation));
                statement.push(functionButtons[i].textContent);
                
                currentValue = "";
                console.log("evaluation: ", statement);
            }
            else {
                console.log(statement);
                statement.push(Number.parseFloat(currentValue));
                currentValue = "";
                
                statement.push(functionButtons[i].textContent);
                console.log(statement);
            }
        }
        else if (statement.length === 2) {
            console.log("changing function type: ", statement);
            statement.pop();
            statement.push(functionButtons[i].textContent);
        }
        else if(statement.length > 0) {
            statement.push(functionButtons[i].textContent);
            console.log(statement);
        }

    })
}

// Sets up numbered buttons
// going to add into current value for each value pressed
for (let i = 0; i < numberpadButtons.length; i++) {

    numberpadButtons[i].addEventListener("click", function() {

        if (Number.isInteger(Number.parseFloat(numberpadButtons[i].textContent.toString()))) {
            currentValue = currentValue + numberpadButtons[i].textContent.toString();
            console.log("current value: ", currentValue);
        }   
        // else {
        //     currentValue += numberpadButtons[i].textContent.toString();
        //     console.log("not a number: " + currentValue);
        // }
    })
}
