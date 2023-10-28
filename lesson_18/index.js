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

// class ClassUser {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// };

// class Animal {
//     eats = true;
//     breath = true;
//     see = true;
// };

class Animal {
    eats = true;
    breath = true;
    see = true;

    constructor(isDangerous) {
        this.isDangerous = isDangerous;
    }
};

class Dog extends Animal {
    // constructor({eats, breath, see}, {name, age}) {
    constructor({name, age, isDangerous}) {
        // super(eats, breath, see);
        super(isDangerous);

        this.name = name;
        this.age = age;
    }
}

class Corgi extends Dog {
    constructor({color, ...rest}) {
        super({...rest});

        this.color = color;
    }

}

const myDog = new Corgi({
        color: 'orange',
        name: 'Foxy',
        age: 1,
        isDangerous: true
    });

console.log(myDog);




class PokemonService {
    // baseUrl = 'https://pokeapi.co/api/v2/';
    static baseUrl = 'https://pokeapi.co/api/v2/';

    static async getAllPokemons() {
        try {
           return await fetch(`${this.baseUrl}/pokemon`)
               .then(response => response.json());
        } catch(e){}
    }

    // async getPokemonByName(name) {
    //     try {
    //         return await fetch(`${this.baseUrl}/pokemon/${name}`)
    //             .then(response => response.json());
    //     } catch(e){}
    // }

    static async getPokemonByName(name) {
        try {
            return await fetch(`${this.baseUrl}/pokemon/${name}`)
                .then(response => response.json());
        } catch(e){}
    }

    static sayHello() {
        console.log('Hello')
    }
}

// const instance = new PokemonService(); // this is instance
//
// instance.getAllPokemons().then(data => {
//     console.log(data);
// });

// PokemonService.getAllPokemons().then(data => {
//     console.log(data);
// });
//
//
// class TestExtending extends PokemonService{}
//
// TestExtending.sayHello();






class PokemonService2 {
    #name = 'Alex';

    sayName() {
        // console.log(this.#name);
        console.log(1);
    }
}


class BlaBla extends PokemonService2 {
    sayName() {
        // console.log(2);
        super.sayName();
    }
}


// const service = new PokemonService2();
const service = new BlaBla();

service.sayName();



class CoffeeMachine {
    #waterAmount = 0; // hide

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды");
        this.#waterAmount = value;
    }
}
const machine = new CoffeeMachine();

machine.waterAmount = 100; // set

console. log(machine.waterAmount); // get








