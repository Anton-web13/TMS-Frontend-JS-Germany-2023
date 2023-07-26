const a = 5;
const b = "6";

const sum = a + b; // "56"

console.log(sum);

const helloWorld = "helloWorld";

function parentFunction (number) {
    function childFunction (value) {
        function another (value) {
            return value * 3;
        }

        return another(value)
    }

    return childFunction(number);
};

// parentFunction();

const result = parentFunction(10);

// console.log(result);


function functionDeclaration() {
    console.log(1);
}

const functionDeclarationExpration = function() {
    console.log(1);
}

functionDeclarationExpration();


const sum1 = function(a, b) {
    return a + b;
}

const result1 = sum1(4,5);
console.log(result1);


console.clear();



// string
const someString = "hello!";

console.log(someString.length);

const firstLetter = someString[0];
const lastLetter = someString[someString.length - 1];

console.log(lastLetter);



// toUpperCase()
const someStringFunction = function() {
    const uppercasedString = someString.toUpperCase();
    console.log(uppercasedString);

    // someString = someString.toLowerCase();
    // console.log(someString);
}

// someStringFunction();

console.log(someString);

console.clear();





// trim
const hello = "      HELLO    !   ";

const helloToNorm = function() {
    const helloTrim = hello.trim();
    console.log(helloTrim);
};

// helloToNorm();
console.clear();





// replace
// const replace = "LOOOOOOL";
const replaceString = "     LOOO    OO   OL       ";

const replaceToNorm = function() {
    // const newWord = replace.replace("O", "W");
    return replaceString.replaceAll(" ", "").replaceAll("O", "Y");
    };

// console.log(replaceToNorm());

console.clear();





// slice, indexOf
const globalVariable = "Hello World";

const someFunction = function () {
    // const firstWord = globalVariable.slice(6, 10);
    // const firstWord = globalVariable.indexOf("l", 4);
    // const firstWord = globalVariable.slice(-globalVariable.length, -2);
    // const firstWord = globalVariable.slice(-4, globalVariable.length);
    // const firstWord = globalVariable.slice(-4, -1);
    const firstWord = globalVariable.charAt(0);

    return {
        firstWord,
    }
};

// console.log(someFunction());

console.clear();


const helloFunction = function (string) {
    // const firstLetter = string[0].toUpperCase();
    // const othersLetter = string.slice(1).toLowerCase();
    // return `${firstLetter}${othersLetter}`;

    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

// console.log(helloFunction("zczcsdcdeLLO"));

console.clear();

const changeTheLetters = function (letters) {
    // console.log("This iS a TeSt sTring".replace(/./g, letter => {
    //     const startLetter = letter.toUpperCase();
    //     return letter === startLetter ? letter.toLowerCase() : startLetter;
    // }))

    // return letters === letters.toLowerCase() ?
    //     letters.toUpperCase() :
    //     letters.toLowerCase();

    return letters.replace(/./g, letter => {
        const letterToUppercase = letter.toUpperCase();
        return letter === letterToUppercase ? letter.toLowerCase() : letterToUppercase;
    })
};

console.log(changeTheLetters("This iS a TeSt sTring"));

console.clear();


const trueOrFalse = function (value) {
    // if(value % 2 === 0) {
    //     return console.log("The number is true");
    // }
    //
    // return console.log("The number is false");

    return value % 2 === 0;
};

// console.log(trueOrFalse(10));

const trueOrFalse2 = (value) => value % 2 === 0;


// console.log(trueOrFalse2(4));

console.clear();


// 5
const deleteLetters = function(value) {
    return value.slice(1, -1);
}

// console.log(deleteLetters('Hallo'));

console.clear();

//6

const toBigOfLetter = function (value) {
    const isPositiv = value.length % 2 === 0;

    const firstLetter = value[0].toUpperCase();
    const toLastLetter = value.slice(1, -1).toLowerCase();

    if (isPositiv) {
        const lastLetter = value[value.length - 1].toUpperCase();
        return `${firstLetter}${toLastLetter}${lastLetter}`;
    }

    return `${firstLetter}${toLastLetter}${value[value.length - 1]}`;
}

// console.log(toBigOfLetter("Berlinew"));


// 9

const constchekStringLength = function (letters, value) {
    return letters.length >= value ? "Ok" : "Not ok";
}

// console.log(constchekStringLength("zfgsd", 3));

console.clear();

const cyclesFunction = function () {
    const string = "Hello World!";
    let result = "";
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i];
    //
    //     // if (char === char.toUpperCase()) {
    //     //     result += char.toLowerCase();
    //     // } else {
    //     //     result += char.toUpperCase();
    //     // }
    //
    //     // char === char.toUpperCase() ? result += char.toLowerCase() : result += char.toUpperCase();
    //     result += char === char.toUpperCase()
    //         ? char.toLowerCase()
    //         : char.toUpperCase();
    // }

    for (let i = string.length - 1; i >= 0; i--) {
        // console.log(string[i])

        // if (char === char.toUpperCase()) {
        //     result += char.toLowerCase();
        // } else {
        //     result += char.toUpperCase();
        // }

        // char === char.toUpperCase() ? result += char.toLowerCase() : result += char.toUpperCase();
        // result += char === char.toUpperCase()
        //     ? char.toLowerCase()
        //     : char.toUpperCase();
    }

    return result;

}

// console.log(cyclesFunction());

console.clear();


// for of
const forOfFunction = function () {
    const string = "Hello World!";
    let result = "";

    for (const charq of string) {
        console.log(charq);
        // console.log("11234")
    }

    // return result;
}

forOfFunction();


console.clear();

// break
const newFunctionFromFor = function () {
    const string = "Hello world!";
    let result = "";

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char.toLowerCase() === "w") {
            break;
        }

        result += char;
    }

    return result;
}

console.log(newFunctionFromFor());

console.clear();




// for in
const newFunctionFromForOf = function () {
    const string = "Hello world!";
    let result = "";

    for (const char in string) {
        const letter = string[char];

        // char =  string[char];
        // console.log(letter);
        if (letter === "w") {
            break;
        }

        result += letter;
    }

    return result;
}

console.log(newFunctionFromForOf());

console.clear();



// while
const newFunctionWhile = function () {
    const string = "Hello world!";
    let i = 0;

    while (i < string.length) {
        const char = string[i];
        console.log(char);

        i++;
    }


}

console.log(newFunctionWhile());



console.clear();


// do while
const newFunctionDoWhile = function () {
    const string = "Hello world!";
    let i = 0;

    do {
        const char = string[i];
        console.log(char);
        i++;

    } while (i < string.length);


}

console.log(newFunctionDoWhile());


console.clear();




// array

const numbers = [1,2,3,4];
const strings = ['2', '3', '4', '5', '6'];

const letterH = ['H'];

letterH[0] = 'A';

console.log(letterH);


console.clear();



// push, pop, unshift, shift
const someArray = [1,2,3];
someArray.push("Anton");
someArray.pop();
someArray.shift();
someArray.unshift("qwe");

console.log(someArray);





















