const calculator = () => {
    /**
     * Addition function takes only two whole numbers and return the sum.
     * eg addition(1, 1) returns 2.
     * @param {Number} num1 
     * @param {Number} num2 
     * @returns {Number}
     */
    const addition = (num1, num2) => {
        return num1 + num2;
    }

    /**
     * Subtraction function takes in two numbers and returns the difference.
     * eg subtraction(1, 2) returns -1.
     * @param {Number} num1 
     * @param {Number} num2 
     * @returns {Number}
     */
    const subtraction = (num1, num2) => {
        return num1 - num2;
    }

    /**
     * Divition function takes in two numbers and divides the first number by the second and return the result.
     * eg division(2, 2) returns 1.
     * @param {Number} num1 
     * @param {Number} num2 
     * @returns {Number}
     */
    const division = (num1, num2) => {
        return num1 / num2;
    }

    /**
     * Multifplication function, multiplies two numbers and return the result.
     * eg multiplication(1, 3) returns 3.
     * @param {Number} num1 
     * @param {Number} num2 
     * @returns {Number}
     */
    const multiplication = (num1, num2) => {
        return num1 * num2;
    }

    return {addition, multiplication, division, subtraction}
}

/**
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {String} operator 
 * @returns {Any}
 */
const calculate = (num1, num2, operator) => {
    if (operator === "/") {
        return calculator().division(num1, num2)
    } else if (operator === "*") {
        return calculator().multiplication(num1, num2)
    } else if (operator === "-") {
        return calculator().subtraction(num1, num2)
    } else if (operator === "+") {
        return calculator().addition(num1, num2)
    } else {
        return "Error";
    }
}

const screen = document.querySelector("#screen");
const resultScreen = document.querySelector("#resultScreen")
const calcButtons = document.querySelectorAll(".calculatorButton");
calcButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (screen.textContent === "0") {
            screen.textContent = button.textContent;
        // }else if ((screen.textContent.endsWith("-") || screen.textContent.endsWith("/") || screen.textContent.endsWith("+") || screen.textContent.endsWith("*")) && (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/")) {
        //     screen.textContent.replace(screen.textContent.split("")[-1], button.textContent) 
        } else {
            screen.textContent += button.textContent;
        }
        
    })
})

/**
 * 
 * @param {String} equation 
 * @returns {String[]}
 */
const splitEquation = (equation) => {
    // console.log(equation)
    if (equation.includes("+")) {
        return equation.split("+").push("+");
    }
    if (equation.includes("/")) {
        return equation.split("/").push("/");
    }
    if (equation.includes("*")) {
        return equation.split("*").push("*");
    }
    if (equation.includes("-")) {
        return equation.split("-").push("-");
    }
}

const equalButton = document.querySelector("#equalsOperator");
equalButton.addEventListener("click", () => {
    try {
        const equationList = splitEquation(screen.textContent)
        resultScreen.textContent = calculate(Number(equationList[0]), Number(equationList[1]), foo[2])
    } catch (error) {
        screen.textContent = "Error";
    }
})