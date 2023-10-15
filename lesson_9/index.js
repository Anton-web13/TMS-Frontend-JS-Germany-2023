const superAnimal = {
    vision: true,
};

const animal = {
    eats: true,
};

const dog = {
    bark: true,
};

animal.__proto__ = superAnimal;

dog.__proto__ = animal;

// console.log(dog.vision);


// Array.prototype.map = null;

Array.prototype.log = function () {
    console.log('Hello');
};

const x = [];

// x.log();


const user = {
    name: 'Alex',

    hasOwnProperty(v) {
        console.log('Hello!')
    }
};

// console.log(user.hasOwnProperty("age"));




const animal1 = {
    eats: true,
};

const dog1 = {
    bark: true,
};


dog1.__proto__ = animal;

// console.log(dog1.hasOwnProperty("eats"));

// console.log("eats" in dog1);

console.clear();

const animnalNumber = {
    a: 1,
    x: 2,
};

const dogTwo = {
    bark: true,
};

dogTwo.__proto__ = animnalNumber;

for (const key in dogTwo) {
    // console.log(key);
}

console.log(Object.entries(dogTwo));


console.clear();



const object = {name: 'Alex'};
// console.log(object.toString());

Object.prototype.toString = function() {
    return JSON.stringify(this);
};

// console.log(object.toString());

const string = `${object}`;

console.log(string);





console.clear();
const numbers = [1,2,2,2,2,2,2,3,3,3,3,];

const findMostFrequent = (numbers) => {
    const meetingsCountMap = numbers.reduce((countMap, number) => {
        if (!countMap.hasOwnProperty(number)) {
            countMap[number] = 1;
        } else {
            countMap[number] += 1;
        }

        return countMap;
    }, {});
    // console.log(meetingsCountMap);

    // One variant

    // const entries = Object.entries(meetingsCountMap);
    //
    // entries.sort(([prevKey, prevValue], [nextKey, nextValue]) => {
    //     return nextValue - prevValue;
    // })
    //
    // console.log(entries);
    //
    // return entries[0][0];


    // Two variant

    // const meetings = Object.values(meetingsCountMap);
    // const maxMeetings = Math.max(...meetings);
    // const reversedMeetingsCountMap = {};
    // for (const key in meetingsCountMap) {
    //     console.log(key);
    //     const meetingsCount = meetingsCountMap[key];
    //     // console.log(meetingsCount);
    //
    //     reversedMeetingsCountMap[meetingsCount] = key;
    // }
    //
    // console.log(reversedMeetingsCountMap);
    //
    // return +reversedMeetingsCountMap[maxMeetings];

    // console.log(maxMeetings);


    // Three variant
    // const entries = Object.entries(meetingsCountMap);
    //
    // const [key] = entries.reduce((result, number) => {
    //     return result[1] > number[1] ? result : number;
    // })
    //
    // return +key;


    // Four variant
    const entries = Object.entries(meetingsCountMap);

    const [key] = entries.reduce((result, number) => {
        console.log(result);
        console.log('================');
        console.log(number);
        const [resultKey, resultValue] = result;
        const [numberKey, numberValue] = number;

        if (resultValue === numberValue) {
            return +resultKey > +numberKey ? result : number;
        }

        return resultValue > numberValue ? result : number;
    });

    return Number(key);


};

console.log(findMostFrequent(numbers));


// const list = [{name: 'Maria'}, {name: 'Zane'}, {name: 'Anna'}];
//
// list.sort((previous, next) =>{
//     return previous.name > next.name ? -3 : 3;
//     // console.log(previous);
//     // console.log('------------------');
//     // console.log(next);
// });
//
// console.log(list);


console.clear();




// Home works
// 1 Task
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

const getNewVideos = (videos) => {
    return videos.reduce((result, {id, title}) => {
        result[id] = title;

        return result;
    }, {});
};

// console.log(getNewVideos(videos));



// 2 Task
const boxart = [
    {
        width: 800,
        height: 200,
        url: '800aksjefb\zsldifhvbziusdfvauwedhbawyefvaiseufvawieufygai0'
    },
    {
        width: 150,
        height: 200,
        url: '150httpa5616194616ksjefb\zsldifhvbziusdfvauwedhbawyefvaiseufvawieufygai0'
    },
    {
        width: 300,
        height: 200,
        url: '300http\zsldifhvbziusdfvauwedhbawyefvaiseufvawieufygai0'
    },
    {
        width: 55,
        height: 150,
        url: '425aksjefb\zasoiurefbgosierbyfosaiuwerfawerf'
    }
];

const gerUrl = (boxart) => {
    // const squareOfArt =  boxart.map(({width, height, url}) => {
    //     return {
    //         square: width * height,
    //         url,
    //     }
    // })
    //
    // const {url} = squareOfArt.reduce((result, currentBoxart) => {
    //     return result.square > currentBoxart.square
    //         ? result
    //         : currentBoxart
    // });
    //
    // return url;


   const {url} = boxart.reduce((currentBoxart, nextBoxart) => {
       const {width, height} = currentBoxart;
       const {width: nextBoxartWidth, height: nextBoxartHeight} = nextBoxart;

       const currentSquare = width * height;
       const nextSquare = nextBoxartWidth * nextBoxartHeight;

       return currentSquare > nextSquare ? currentBoxart : nextBoxart;
    });

   return url;
};

// console.log(gerUrl(boxart));






// 3 Task
const numberFn = [1,1,2,2,2,2,2,2,3,3,3,3,3];

const getMostUseNumber = (numbers) => {

    // 1
    const mostNumber = numbers.reduce((result, number) => {
            if (result[number]) {
                result[number] += 1
            } else {
                result[number] = 1;
            }

            return result;
    }, {});

    const entries = Object.entries(mostNumber);

    console.log(entries);

    return entries.reduce((result, number) => {
        return result[1] > number[1] ? result : number;
    })[0];


    // 2 not works
    // const mostNumber = numbers.reduce((result, number) => {
    //     if (!result[number]) {
    //         result[number] = 0;
    //     }
    //
    //     result[number] += 1;
    //     return result;
    // }, {});
    //
    // console.log(mostNumber)
    //
    // let max = 0;
    //
    // for (const number in mostNumber) {
    //
    //     const most = mostNumber[number];
    //
    //     if (most > max) {
    //         max = most;
    //     }
    // }
    //
    // // return number;
    //
    // // return mostNumber;
};

// console.log(getMostUseNumber(numberFn));




// 4 Task
const others = { a: 1, b: 'Hello', c: null, z: undefined};

const getNewOthers = (others) => {
    const entries = Object.entries(others);
    // console.log("Original", entries);

    //1
    // const notNull = entries.reduce((result, value) => {
    //     if (value[1] !== null && value[1] !== undefined) {
    //         result.push(value);
    //     }
    //
    //     return result;
    // }, []);
    //
    // return Object.fromEntries(notNull);


    // 2
    // const filterEntries = entries.filter(([key, value]) => {
    //
    //     if (value !== null && value!== undefined) {
    //         return value;
    //     }
    // })
    //
    // return Object.fromEntries(filterEntries);

    // 3
    return entries.reduce((result, [key, value]) => {
        if (typeof value !== "undefined" && value !== null) {
            result[key] = value;
        }

        return result;
    }, {});
};

// console.log(getNewOthers(others));




// 5 Task
const numbersTask5 = [1,2,2,2,2,2,2,3,3,3,3,3];

const getNumberOnlyOne = () => {
    const reduceOfNumbers = numbersTask5.reduce((result, number) => {
        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }

        return result;
    }, {});

    const reduceToArray = Object.entries(reduceOfNumbers);

    return reduceToArray.forEach((number) => {
        if (number[1] === 1) {
            console.log(number[0])
        }
    })

    // return numbersTask5.find((number, _, currentArray) => {
    //     return currentArray.indexOf(number) === currentArray.lastIndexOf(number);
    // })
};

// console.log(getNumberOnlyOne());






// 6 Task
const stringTask6 = 'HelloLeute,wiegehtesIhnen?';

const getBrieflyString = (string, number) => {
    if (string.length > number) {
        return `${string.slice(0, number)}...`;
    }

    return string;
};

// console.log(getBrieflyString(stringTask6, 26));



// 7 Task
const myNumbers = [1,2,3];
// const newMyMap = [];

Array.prototype.customMap = function (callback) {
    const result = [];
    // console.log(callback);
    // console.log(this);

    for (let i = 0; i < this.length; i++) {

        const currentItem = this[i];

        const newItem = callback(currentItem, i, this);

        result.push(newItem);
    }

    return result;
};

// console.log(myNumbers.customMap((item) => item * 2));





// 8 Task
Array.prototype.customFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {

        const currentItem = this[i];

        const isAcceptable = callback(currentItem, i, this);

        if (isAcceptable) {
            result.push(currentItem);
        }
    }

    return result;
};

// console.log(myNumbers.customFilter((number) => number > 2));




