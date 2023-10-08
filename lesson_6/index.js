const numbers = [1,2,3,4,5];

// const sum = (numbers) => {
//     return numbers.reduce((accumulator, number, index, currenArray) => {
//         console.log("Промежуточное значение", accumulator);
//         console.log("Текущий элемент", number);
//         console.log("-------------------------------------");
//         return (accumulator + number);
//     }, '')
// }
//
// console.log(sum(numbers));



const getSquaresOfEven = (numbers) => {
    const evenNumbers = numbers.filter((number) => {
        return number % 2 === 0;
    })

    return evenNumbers.map((number) => {
        return number ** 2;
    });
}

// console.log(getSquaresOfEven(numbers));



const getSquaresOfEvenReduce = (numbers) => {
    return numbers.reduce((result, number) => {
        console.log("Промежуточное значение", result);
        console.log("Текущий элемент", number);
        console.log("-------------------------------------");

        if (number % 2 ===0) {
            result.push(number ** 2);
        }
        return result;
    }, [])
}

// console.log(getSquaresOfEvenReduce(numbers));




const ids = ['id1','id2','id1','id2','id2','id3'];

const findNumberOfWords = (ids) => {
    return ids.reduce((result, id) => {
        result[id] = (result[id] || 0) + 1;
        return result;
    }, [])
}

// console.log(findNumberOfWords(ids));




const getString = (numbers) => {
    return numbers.reduce((result, number) => {
        return result + number;
    }, '');
};

// console.log(getString([1,2,3,4,5]));


const getNumber = (strings) => {
    return strings.reduce((result, string) => {
        // const numberValued = +string;
        const numberValued = Number(string);
        // if (!isNaN(numberValued)) {
        //     result += numberValued;
        // }

        if (numberValued === numberValued) {
            result += numberValued;
        }

        return result;
    }, 0);
};

// console.log(getNumber(["1","2","srfd","4",'5', 6]));





// object

const user2 = {
    id: 1,
    name: 'Alex',
    email: 'lolkek@mail.com',
    birthYear: 1945,
    address: {
        location: {
            localLocation: {
                city: 'Berlin',
            }
        }
        // city: 'Minsk',
        // country: 'Belarus',
        // zip: '220130',
        // street: 'Pushkina',
        // street2: null,
    },
    hobbies: ['Football', 'Codding'],
    [1]: 25,
    2: 38,
};

// console.log(user2.address);

// const city =
//     user.address &&
//     user.address.location &&
//     user.address.location.localLocation &&
//     user.address.location.localLocation.city;

const city2 = user2.address?.location?.localLocation?.city || 'City no found';

// console.log(city2);



const user = {
    id: 1,
    name: 'Alex',
    email: 'lolkek@mail.com',
    birthYear: 1945,
    hobbies: ['Football', 'Codding'],
    address: {
        city: 'Minsk',
    }

};

// user.email = 'keklol@mail.com';
//
// user.lasName = "Petrov";
//
// console.log(user);

// Object.freeze(user);
user.address.city = 2;

delete user.id;

// console.log(user);


const user3 = {
    id: 1,
    name: 'Alex',
    email: 'lolkek@mail.com',
    address: {
        city: 'Minsk',
    },
    sayHello: () => {
        console.log("Hello");
    },
};

// const user4 = user3;
// user4.email = 'dfgdhd';
// console.log(user3, user4);

// const user4 = Object.assign({}, user3);
// const user4 = {...user3};

// user4.id = 56;
// user4.address.city = 'Mexico';
// console.log("U1", user4);
// console.log("U2", user3);

const deepClone = JSON.parse(JSON.stringify(user3));
deepClone.address.city = "Berlin";
// console.log('U1', deepClone, 'U2',user3);
// console.log(JSON.stringify(user3));

const newUser = {...user3};
newUser.lastName = "Petrov";

// console.log('newUser', newUser,"user3", user3);

const {email, ...restUser} = user3;

// console.log(restUser, email);

const user5 = {
    home: "Lalalend",
}

const resultOfUsers = {...user3, ... user5};

console.log(resultOfUsers);












