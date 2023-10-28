// export const x = 5;

// const user = {};
//
// Object.defineProperty(user, 'age', {
//     value: 23,
//     writable: false,
//     enumerable: true,
//     configurable: false,
// })

// // console.log(Object.getOwnPropertyDescriptor(user, 'age'));
//
// user.age = 25;
// // console.log(user);
//
//
// for (const key in user) {
//     console.log(key);
// }
//
// console.log(user.age);
//
// const entries = Object.entries(user);
//
// console.log(entries)

// Object.defineProperty(user, 'age', {
//     writable: true,
// })

// console.log(Object.getOwnPropertyDescriptor(user, 'age'));

// delete user.age;
//
// console.log(user);







// Constructor
// this is function-constructor.

const human = {
    eats: true,
};

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype = human;

// const max = new User('Maxim', 25);

const user = new User('Alex', 25);

// console.log(user.eats);



// Classes
// Constructor
function UserClasses(name, age) {
    this.name = name;
    this.age = age;
};

class ClassUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};

const classUser = new ClassUser('alex', 25);

console.log(classUser)








