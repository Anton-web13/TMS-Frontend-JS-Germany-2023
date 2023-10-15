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



const getFactorialRecursion = () => {

}



