const textHome = "Wer ist da?"
let result = "123";
console.log(result);

console.log(typeof result);
console.log(typeof textHome);

const sum = 11 * "1";
const resultOfSum = 11 - "hello";
const resultOfSum2 = 11 ** 3;
const resultOfSum3 = 11 % 3;

const world1 = "hello";
const wordl2 = "World";

console.log(`${world1} and ${wordl2}`)

console.log(resultOfSum);
console.log(sum);
console.log(typeof sum);
console.log(typeof resultOfSum, resultOfSum);
console.log(typeof resultOfSum2, resultOfSum2);
console.log(typeof resultOfSum3, resultOfSum3);
console.log(4 === "4")

let number = 6;

number /= 2;

console.log(number);

function sayHello () {
    console.log("Jemand kommt!");
}

sayHello();

function calculateSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function substractTwoNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
// const sumOnePlusTwo = calculateSum(1,99);

function calculate (firstNumber, secondNumber){
    const sum = calculateSum(firstNumber,secondNumber);
    const substraction = substractTwoNumbers(firstNumber, secondNumber)

    return sum * substraction;
}

console.log(calculate(5,3));


function sumOfAlles(a,b) {
    if (a>b) {
        return console.log("!!!!!");
    }

    return console.log("-------------")
}

// console.log("===========");

console.log(sumOfAlles(6,"15"));

console.log(!!" ");








