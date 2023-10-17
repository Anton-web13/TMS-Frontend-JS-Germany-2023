const someFunction = () => {
    someFunction();
};

// someFunction();


const countDigits = (number) => {
    const digits = String(number).split("");
    console.log(digits);

    const sum = digits.reduce((result, digit) => {
        return result + +digit;
    }, 0)

    if (sum > 9) {
        return countDigits(sum);
    }

    return sum;
};

// console.log(countDigits(555));





// new Map(), new Set()

const numbers = [1,1,2,2,3,3,4,6,6,9,9,8];

const uniqueNumbers = new Set(numbers);

const array = Array.from(uniqueNumbers);




const uniqueNumbers1 = new Set([3,4,5]);

// console.log(uniqueNumbers1);

// const myObject = {a: 1};
//
// uniqueNumbers1.add(myObject);

// console.log(uniqueNumbers1);
// console.log(uniqueNumbers1.has(789));
// console.log(uniqueNumbers1.values());
// console.log(uniqueNumbers1.keys());

uniqueNumbers1.forEach((currentElement, index, array) => {
    // console.log("Element", currentElement);
    // console.log("Index", index);
    // console.log("Array", array);
});

for (const key of uniqueNumbers1) {
    // console.log(key);
}

// console.log(uniqueNumbers1.entries());




const object = {
    id: '123',
    name: 'Alex',
};

const users = {};
users[object] = true;
// console.log(users);


// const myMap = new Map();

// myMap.set(object, true);
//
// console.log(myMap);
// console.log(myMap.get(object));


const myMap = new Map();

myMap.set(1, 'Hello');
myMap.set(2, 'sdfghdgh');
myMap.set(3, 'wq345w345');

// console.log(myMap);

// console.log(myMap.get(1));
// console.log(myMap.has(1));
// console.log(myMap.has(1));
// myMap.clear();
// console.log(myMap.has(1));

// console.log(myMap.delete(2));
// console.log(myMap.entries());
// console.log(Array.from(myMap.entries()));

// for (const [key, value] of myMap) {
//     console.log(key, value);
// }


const videos = [
    {
        id: 65432445,
        title: "The Chamber",
    },
    {
        id: 675465,
        title: "Fracture",
    },
    {
        id: 707070576706767067,
        title: "Die Hard",
    },
    {
        id: 6546649665498465,
        title: "Bad Boys",
    }
];

constcomments = [
    {
        text: 'COll',
        filmId: 6546649665498465,
    },
    {
        text: 'sCHLECT',
        filmId: 707070576706767067,
    },
    {
        text: 'Noorm',
        filmId: 675465,
    },
    {
        text: 'Es passt.',
        filmId: 65432445,
    }
];



const filmsComments = (films, comments) => {
    const FilmsIdTitleMap = new Map();

    films.forEach(({id, title}) => FilmsIdTitleMap.set(id, title));

    return comments.map((comment => {
        return {
            ...comment,
            filmName: FilmsIdTitleMap.get(comment.filmId),
        }
    }))

};

// console.log(filmsComments(videos, constcomments));




const factorial = [1,2,3,4,5,6,7,8,9];
const number = 5;

const getFactorialСycle = (number) => {
    let sum = 1;

    // numbers.forEach((number) => {
    //     sum = sum * number;
    //     console.log(sum);
    // })

    for (let i = 1; i <= number; i++) {
        sum *= i;
    }

    return sum;
};

// console.log(getFactorialСycle(number));



// const getFactorialRecursion = () => {
//
// }






// Home tasks
// 1 Task
const someWords = "camelCasing'";

const getWordsWithSpace = (word) => {
    let newWord = []
    word.split('').forEach((letter) => {
        if (letter !== letter.toUpperCase()) {
            newWord.push(letter);
        } else if (letter === letter.toUpperCase()) {
            newWord.push(" ");
            newWord.push(letter);
        }
    })

    return newWord.join("");
};

// console.log(getWordsWithSpace(someWords));





// 2 Task
const numbersProgression = [1, 11];

const findMissing = () => {
    let newNumbers = [];

    for (let i = 1; i <= 11; i++) {
        if (i % 2 !== 0 || numbersProgression.includes(i)) {
            newNumbers.push(i);
        }
    }

    return newNumbers.filter((number) => {
        if (!numbersProgression.includes(number)) {
            return number;
        }
    });
};

// console.log(findMissing());

// const now = performance.now();
//
// findMissing();
//
// const end = performance.now();
//
// console.log(`${end - now}ms`);



const findMissingNumber = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const nextNumber = numbers[i + 1];
        const numberAfterNextNumber = numbers[i + 2];

        const currentDifference = nextNumber - currentNumber;
        const nextDifference = numberAfterNextNumber - nextNumber;

        if (currentDifference !== nextDifference) {
            return currentNumber + nextDifference;
        }
    }
};

// console.log(findMissingNumber([2, 6, 18]));


// 3 Task
const symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

const value = [1,5,10,50,100,500,1000];

const getNumeral = (symbol, value, datum) => {


    const newMap = new Map();

    newMap.set(symbol, value);

    console.log(newMap);

    console.log(Object.entries(newMap));

    // console.log(newMap.);

};

// console.log(getNumeral(symbol, value, "MM"));


const convertRomainNumbers = (romanianNumber) => {
    const RomainNumbersMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < romanianNumber.length; i++) {

        const currentSymbol = romanianNumber[i];
        const nextSymbol = romanianNumber[i + 1];

        const currentValue = RomainNumbersMap[currentSymbol];
        const nextValue =  RomainNumbersMap[nextSymbol];

        console.log("Current", currentValue, nextValue)

        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    console.log("Result", result);

    return result;
};

// console.log(convertRomainNumbers('XIX'));


// 4 Task
const findClovesPairs = (gloves) => {
    const GlovesAmountMap = new Map();

    gloves.forEach((glove) => {
       if (GlovesAmountMap.has(glove)) {
           GlovesAmountMap.set(glove, GlovesAmountMap.get(glove) + 1);
       } else {
           GlovesAmountMap.set(glove, 1);
       }
    });



    return Array.from(GlovesAmountMap).reduce((result, [_, amount]) => {
        return result + Math.floor(amount / 2);
    }, 0);

};

// console.log(findClovesPairs(['red', 'red', 'red', 'green', 'green']));



// 5 Task
const findFactorial = (number) => {
    if (number === 0) {
        return 1;
    }

    return number * findFactorial(number - 1);
};

console.log(findFactorial(5));











