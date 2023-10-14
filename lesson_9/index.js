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


