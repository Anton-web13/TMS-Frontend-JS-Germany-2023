const createCounter = () => {
    let counter = 0;

    return () => {
        return (counter += 1);
    };
};

const firstCounter = createCounter();

// console.log(firstCounter());



// const user = {
//     name: 'Alex',
//     sayName2() {
//         console.log(this);
//     },
//     sayName3: function() {},
//     sayName: () => {
//         console.log(this);
//     },
// };

const user = {
    name: 'Alex',
    sayName2() {
        const sayName = () => {
            console.log(this);
        };

        sayName();
    },
};

// user.sayName2();




// call, apply, bind
const sayName = function (arg1, arg2) {
    console.log(`${this.name} - ${arg1} - ${arg2}`);
};

const user1 = {
    name: 'Alex',
}

const user2 = {
    name: 'Alena',
}

const user3 = {
    name: 'Max',
}

// sayName.call(user1, 1, 2);
// sayName.apply(user2, [1,2,3]);

const bindedSayName = sayName.bind(user3, 1,2);

// bindedSayName();


const numbers = [1,1,3,3,3,4,4,5,5,5,7,9,9,9];

const getOneNumber = (numbers) => {
    // const getNumbers = numbers.reduce((result, number) => {
    //     result[number] = (result[number] || 0) + 1;
    //     return result;
    // },[]);

    const getNumbers = numbers.reduce((result, number) => {
        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        }

        return result;
    },{});

    return Object.entries(getNumbers).filter((value) => {
        if (value[1] === 1) {
            return value;
        }
    });

    // return oneNumber;
};

console.log(getOneNumber(numbers));


// const findNumber = (numbers) => {
//     return numbers.find((num, _, currentArray) => {
//         return currentArray.indexOf(num) === currentArray.lastIndexOf(num);
//     })
// };
//
// console.log(findNumber(numbers));


























