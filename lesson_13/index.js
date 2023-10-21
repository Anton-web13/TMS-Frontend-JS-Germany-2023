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

// sayArguments(1,2,3)




const comments = [
    {
        id: 1,
        text: 'First Comment',
    },
    {
        id: 2,
        text: 'Second Comment',
    }
];

const users = [
    {
        id: 'srdfsergw34',
        commentId: 2,
        name: 'John Doe',
        email: 'sdfrgsdrgs@doe.com',
    },
    {
        id: 'srdfsergw34',
        commentId: 1,
        name: 'Alex Petrov',
        email: 'petrov@gmail.com',
    }
];


// Variante 1
// const getTextId = (users, comments) => {
//     const commentsMap = new Map();
//
//     comments.forEach(comment => {
//         commentsMap.set(comment.id, comment);
//     });
//
//     // console.log(commentsMap);
//
//     // return users.reduce((result, user) => {
//     //     result.push(
//     //         {
//     //             ...user,
//     //             text: commentsMap.get(user.commentId),
//     //         }
//     //     )
//     //     return result;
//     //
//     // }, [])
//
//
//     return users.map((user) => {
//         return {
//             ...user,
//             text: commentsMap.get(user.commentId).text,
//         }
//     });
// };


// Variante 2
const getTextId = (users, comments) => {
    const commentsReduce = comments.reduce((result, comment) => {
        result[comment.id] = comment;

        return result;
    }, {})


    return users.map((user) => {
        return {
            ...user,
            text: commentsReduce[user.commentId].text,
        }
    });
};

console.log(getTextId(users, comments));
console.clear();









const createFakeRequest = (response, delay, isFailed = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isFailed) {
                reject(new Error('LoL Failed'));
            }
            resolve(response);
        }, delay);
    });
};

const getPokemon = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json());
};

const loadDate = async () => {
    // const pokemon = await createFakeRequest(
    //     {name: 'Pikachu', ability: 'Power Shot'},
    //     5000); // 1m
    // const weather = await createFakeRequest(
    //     {weather: 'Sunday', temperature: '20 deg'},
    //     5000); // 1m
    // const userProfileData = await createFakeRequest(
    //     {id: 'xdfgsrg', name: 'Alex', age: 25},
    //     5000); // 1m

    // console.log({
    //     pokemon,
    //     weather,
    //     userProfileData,
    // })

    try {

        // all

        // const [pokemon, weather, userProfileData] = await Promise.all(
        //     [
        //         createFakeRequest(
        //             {name: 'Pikachu', ability: 'Power Shot'},
        //             1000),
        //         createFakeRequest(
        //             {weather: 'Sunday', temperature: '20 deg'},
        //             3000, true),
        //         createFakeRequest(
        //             {id: 'xdfgsrg', name: 'Alex', age: 25},
        //             2000),
        //     ]
        // )
        // console.log({pokemon, weather, userProfileData})


        // allSettled

        // const [pokemon, weather, userProfileData] = await Promise.allSettled(
        //     [
        //         createFakeRequest(
        //             {name: 'Pikachu', ability: 'Power Shot'},
        //             1000),
        //         createFakeRequest(
        //             {weather: 'Sunday', temperature: '20 deg'},
        //             3000, true),
        //         createFakeRequest(
        //             {id: 'xdfgsrg', name: 'Alex', age: 25},
        //             2000),
        //     ]
        // )
        // console.log({pokemon, weather, userProfileData})


        // race

        // const result = await Promise.race(
        //     [
        //        // getPokemon(1),
        //        // getPokemon(2),
        //        // getPokemon(3),
        //
        //         createFakeRequest(
        //             {name: 'Pikachu', ability: 'Power Shot'},
        //             1000),
        //         createFakeRequest(
        //             {weather: 'Sunday', temperature: '20 deg'},
        //             3000, true),
        //         createFakeRequest(
        //             {id: 'xdfgsrg', name: 'Alex', age: 25},
        //             2000),
        //     ]
        // )



        // any

        const result = await Promise.any(
            [
                // getPokemon(1),
                // getPokemon(2),
                // getPokemon(3),

                createFakeRequest(
                    {name: 'Pikachu', ability: 'Power Shot'},
                    3000),
                createFakeRequest(
                    {weather: 'Sunday', temperature: '20 deg'},
                    2000),
                createFakeRequest(
                    {id: 'xdfgsrg', name: 'Alex', age: 25},
                    1000, true),
            ]
        )
        console.log(result)

    } catch (e) {
        console.log(e.message);
    }

};

// loadDate();



const getAllPokemons = async () => {
    try {
        const allPokemon = [];
        const {results} = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(response => response.json());

        // for (let {url} of results) {
        //     const details = await fetch(`${url}`)
        //         .then(respose => respose.json())
        //     allPokemon.push(details)
        // }
        //

        // console.log(results)

        const pokemonDetailsRequest = results.map(({url}) => {
            return fetch(url).then(response => response.json()); // Wir haben einen Array von Promises gemacht.
        })

        const result = await Promise.all(pokemonDetailsRequest);

        console.log(result);

        // await Promise.all(
        //     results.map((result) => {
        //         return fetch(`${result.url}`)
        //             .then(response => response.json())
        //             .then(data => {
        //                 allPokemon.push(data)
        //             })
        //
        //     })
        // )

    } catch (e) {
        console.log(e.message);
    }

};

getAllPokemons();


//     .then(result => {
//         const allPokemon = [];
//
//         try {
//
//             for (let i = 1; i <= result.length; i++ ) {
//                 fetch(`${result[i]}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         allPokemon.push(data);
//                     })
//             }
//
//             console.log(allPokemon);
//         } catch (e) {
//             console.log(e.message);
//         }
//
//     });












