const user = {
    name: 'Alex',

    say2: function () {

    },
    say() {
        const log = () => {
            console.log(this);
        };

        log();
    },
};



const user2 = {
    name: 'Petr',
};


const youSay = function () {
    // console.log(this.name);
};

youSay.apply(user);

// mySay();


let someString = 'Abc';

someString[0] = 'B';

// console.log(someString);


function smth() {
    a = 5;
};

smth();

// console.log(a);





// const obj = {
//     name: 'Alex',
// }

// const result = obj.toString();
//
// console.log(result);
//
// console.log(JSON.stringify(obj));

Object.prototype.toStringNew = function () {
    return JSON.stringify(this);
};

const obj2 = {
    name: 'Alex',
    age: 30,
};

// console.log(obj2.toStringNew());




// const sayArguments = () => {
//     console.log(arguments)
// };

const sayArguments = function() {
    console.log(arguments)
};

sayArguments(1,2,3)

