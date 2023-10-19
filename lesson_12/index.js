const myPromise = new Promise((resolve, reject) => {
    resolve(5);
});


myPromise
    .then(data => {
    return new Promise((resolve, reject) => {
        // reject(data * 2);
    });
})
    .then(result => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});



const delay = (ms) => {
    return new Promise((resolve, reject) => {
        resolve(5555);
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

// console.log(delay(2000));






const createSuccessPromisse = (value) => {
    return new Promise((resolve) => {
        resolve(value);
    })
};


const foo = createSuccessPromisse(1);

foo.then(one => createSuccessPromisse(one + 10)).then(result => {
    // console.log(result);
})



const URL = "https://pokeapi.co/api/v2/pokemon/sergsert";

// const response = fetch(URL);
// console.log(response);

fetch(URL).then((response) => {
    // if (!response.ok) {
    //     throw new Error(response.status);
    // } else {
    //     return response.json();
    // }
}).then(data => {
    console.log(data);
}).catch(error => {
    alert(`Ooops, etwas schief gegangen. Error: ${error}.`)
})






// console.log(URL);
//
// console.log(1);
// console.log(2);
//
// throw new Error("Oops, error");
//
// console.log(3);



const someFn = () => {


    try {
        console.log(1);
        console.log(2);

        throw new Error('Oops');
    } catch (e) {
        console.log(e);
    }
};

// someFn();

const URL2 = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = () => {
    return fetch(URL2)
        .then((response) => response.json())
        .then(data => {
            // console.log(data);
            return data;
        })
}

// getPokemon();
// const x = getPokemon();

// getPokemon().then(pokemons => {
//     console.log(pokemons);
// })



// async await
const getPokemnts = async () => {

    try {
        const response = await fetch(URL2).then(response => response.json());

        const details = await fetch(response.results[0].url)
            .then(response => response.json())
            .then(data => {
                return data.game_indices ;
            })

        return details;

    } catch (error) {
        console.log(error)
    }
};

getPokemnts().then(result => {
    // console.log(result);
});


// const getPokemnts1 = () => {
//     fetch(URL2)
//         .then(response => response.json())
//         .then(({results}) => {
//             return fetch(results[0].url);
//         }).then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
// };
//
// getPokemnts1();

console.log("Script Start (Synchron)");

const promise = new Promise((resolve) => {
    console.log('Promise Declaration (Synchron)');

    resolve();
});

setTimeout(() => {
    console.log('Timeout (Macro)')
}, 0);

promise.then(() => {
    console.log('Promise Execution (Micro)');
})

console.log("Script End (Synchron)");

const fn = async () => {
    // const data = await fetch("");
    const data = await promise.then(() => 2)
    console.log('Async Declaration (Synchron-Await)');
    return 1;
}

fn().then(() => {
    console.log('Async Execution (Micro)');
});



