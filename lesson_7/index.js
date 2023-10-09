const user = {
    name: "Alex",
    email: 'alex@mail.com',
    address: {
        city: 'Minsk',
    }
}

const user2 = {
    name: 'Oleg',
    email: 'oleg@mail.com',
    address: {
        city: 'Minsk',
        natur: {
            baum: 'Lipa',
        }
    },
    a: 1,
    b: 2,
    c: 3,
}

// const {address, email} = user;
// const {name: olegName, email: olegEmail} = user2;
// console.log(address);
// console.log(email);
// console.log(olegName);
// console.log(olegEmail);

// const {
//     address: {
//         natur: {baum}
//     }
// } = user2;
// console.log(baum);


// const {address, ...othersField} = user2;
// console.log(othersField);



const numbers = [1,2,3,4,5, 25];
// const [one, two,  three, ...others] = numbers;
// const [...others, last] = numbers;

// console.log(one, two,  three);
// console.log(others);


// const secondNumbers = [1,2,3];
// const secondNumbers2 = [...secondNumbers];
// const secondNumbers2 = [].concat(secondNumbers);

// secondNumbers2.push(5);
// console.log(secondNumbers);
// console.log(secondNumbers2);


// const userArray = [{name: 'Alex'}];

// const newUserArray = [...userArray];
// newUserArray[0].name = 'Mate';
// console.log(newUserArray);


// const petrName = userArray.map((user) => {
//     return {
//         name: user.name + 1,
//     }
// });

// console.log(userArray);
// console.log(petrName);


const users = [
    {
        id: 1,
        name: 'Alex',
    },
    {
        id: 2,
        name: 'Petr',
    },
    {
        id: 3,
        name: 'Masha',
    },
    {
        id: 4,
        name: 'Max',
    }
];


// const filterUsers = (users) => {
//     return users.filter(({id, name}) => {
//         return id % 2 ===0;
//     })
// }
//
// console.log(filterUsers(users));




// const usersTo = {
//     name: 'Alex',
//     age: 12
// }

// usersTo.age = 24;
const ageField = 'age';
// usersTo['age'] = 25;
// usersTo[ageField] = 26;
// console.log(usersTo);

const letters = ['a','b','c','d','e','f',];

const createLetters = (lettersList) => {
    const result = {};

    lettersList.forEach((letter) => {
        result[letter] = true;
    })

    return result;
};

// console.log(createLetters(letters));


// const usersTo = {
//     name: 'Alex',
//     age: 12,
//     email: 'srfsert@mail.com',
// }

// const userKeys = Object.keys(usersTo);
// const userValues = Object.values(usersTo);
// console.log(userKeys);
// console.log(userValues);

// const userEntries = Object.entries(usersTo);
// const userFromEntries = Object.fromEntries(userEntries);
// console.log(userFromEntries)


const userS = {
    name: 'Alex',
    age: 23,
    email: 'srfsert@mail.com',
};


const replaceKeyValue = (someObject) => {
    // const result = {};
    //
    // const entries = Object.entries(someObject);
    //
    // for (const [key, value] of entries) {
    //     result[value] = key;
    // }
    //
    // return result;

    const entries = Object.entries(someObject);

    const newEntries = entries.map((entry) => {
        return entry.reverse();
    });

    const fromEntries = Object.fromEntries(newEntries);
    console.log(fromEntries);

};

// console.log(replaceKeyValue(userS));


// const num = [1,2,3];
// num.reverse();
// console.log(num)



const newUsers = [
    {
        name: 'Petr',
        age: 23,
        email: 'srfsert@mail.com',
    },
    {
        name: 'Max',
        age: 23,
        email: 'srfsert@mail.com',
    },
    {
        name: 'Alex',
        age: 23,
        email: 'srfsert@mail.com',
    },
    {
        name: 'Anastasiya',
        age: 23,
        email: 'srfsert@mail.com',
    },
    {
        name: 'Oleg',
        age: 23,
        email: 'srfsert@mail.com',
    },
];


const getNameAndAge = (users) => {
   // const usersReduce = users.reduce((result, {name, age}) => {
   //     result.push({name, age});
   //     return result;
   //  }, []);
   //
   //  return usersReduce;

    // const userMap = users.map(({name, age}) => {
    //     return {
    //         name,
    //         age,
    //     }
    // });


    // return userMap;

    // return users.map(({name, age}) => ({name, age}));

    const userMap = users.map(({name, age}, index) => {
        if (index % 2 === 0) {
            return {
                name,
                age,
            }
        } else {

        }

    });

    return userMap;
};

// console.log(getNameAndAge(newUsers));



const someData = [
    {
        id: 'zdfkjzvsdjfgvA',
        name: 'Alex',
    },
    {
        id: 'drtghdrthser',
        name: 'Maria',
    },
    {
        id: '234TRESRGFSDGR',
        name: 'petr',
    },
    {
        id: 'DFYHSERFAWRG',
        name: 'Anastasiya',
    }
];


const getReverseSomeData = (data) => {
    const dataReduce = data.reduce((result, {id, name}) => {
        result[id] = name;
        return result;
    }, {});

    return dataReduce;

    // const result = [];
    //
    // for (const {id, name} of data) {
    //     result[id] = name;
    // };

    // return result;
};

console.log(getReverseSomeData(someData));









