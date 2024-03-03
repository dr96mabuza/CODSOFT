const calculator = () => {
    /**
     * Addition function takes only two whole numbers and return the sum.
     * eg addition(1, 1) returns 2.
     * @param {Number} num1 
     * @param {Number} num2 
     * @returns {Number}
     */
    const addition = (num1, num2) => {
        return Number(num1) + Number(num2);
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