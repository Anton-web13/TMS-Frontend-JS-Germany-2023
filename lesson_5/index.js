const sum = function (a,b) {
    return a+b;
}

// => function
const arrowSum = (a,b) => a+b;
const arrowSum1 = (a,b) => {
    return a+b;
}



// arguments
const someFn = function () {
    // console.log(arguments[2]);
    // console.log(arguments.length);

    for (const arg of arguments) {
        console.log(arg);
    }
}

const arrowFunction = () => {
    console.log(arguments);
}

someFn(1,7,3,4,5,6,7,8,9);


console.clear();



// callback
const someFunction = (fn) => {
    // console.log(fn);
    const result = fn();

    console.log(result);
}

const sumCallback = (a,b) => a+b;

someFunction(() => {
    console.log("Hello!")
});

someFunction(function () {
    console.log("World!")
});

someFunction(() => sumCallback(1,2));
// someFunction(() => {
//     return sumCallback(1,2);
// });


console.clear();



// map, filter, forEach, find, findIndex, reduce
const doubleNumbersList = (numbers) => {
    // const result = numbers.map((currentElement, index, currentArray) => {
    //     console.log(currentElement);
    //     console.log(index);
    //     console.log(currentArray);
    // })

    // const result = numbers.map((currentElement) => {
    //     return currentElement * 2;
    // })

    if (!Array.isArray(numbers)) {
        return;
    }

    const result = numbers.map((currentElement) => {
        return currentElement.toString();
    })

    return result;
}

console.log(doubleNumbersList("234353")); // 2,4,6

// number to String
const number = 5;
const string = number.toString(); // v1
const string2 = String(number); // v2
const string3 = `${number}`; // v3
const string4 = number + " "; // v4
console.log(string4, typeof string4);


// String to number

const stringNew = "5";

const numberToString = Number(stringNew);
const numberToString2 = +stringNew;


console.log(numberToString2, typeof numberToString2);


console.clear();





const matrix = [[1,2,3], [3,4,5], [5,6,7], [6]];

console.log(matrix[2][2]);


console.clear();








const doubleNumbersList2 = (numbers) => {
    if (!Array.isArray(numbers)) {
        return;
    }

    const result = numbers.map((currentElement) => {
        return currentElement.toString();
    })

    return result;
}

console.log(doubleNumbersList2([1,2,3])); // 2,4,6
// console.clear();
//
// const doubleNumbersList2_alternative = (numbers) => {
//     const result = [];
//
//     for (let i = 0; i < numbers.length; i++) {
//         result.push(String(numbers[i]));
//     }
//
//     return result;
// }
//
// console.log(doubleNumbersList2_alternative([1,2,3])); // 2,4,6






// filter
console.log("w345354")























