
// Version One
// const createFakeRequest = (value, delay, timeout) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (timeout < delay) {
//                 reject(new Error('Das war zu lange!'))
//             } else {
//                 resolve(value);
//             }
//         }, delay);
//     });
// };
//
// const loadData = async (requestFn, timeout) => {
//     requestFn(timeout);
// };
//
// const requestFn =  async (timeout) => {
//     try {
//         const result = await Promise.race(
//             [
//                 createFakeRequest(
//                 'Timing passt voll und ganz', 1000, timeout),
//                 createFakeRequest(
//                     'Timing passt', 1660, timeout)
//             ]
//         );
//
//         console.log(result);
//         return result;
//     } catch (e) {
//         console.log(`Error: ${e.message}`);
//     }
// };


// Version two
const createFakeRequest = (value, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
};

const loadData = (requestFn, timeout) => {
   const rejection = new Promise((_, reject) => {
       setTimeout(() => {
           reject(new Error("Request is too slow!"))
       }, timeout)
   })

    return Promise.race([requestFn, rejection])
        .then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error.message);
    })
};

// loadData(createFakeRequest(
//     'Success', 3000), 2000);-


const allNumbers = [7, 2, 3, "0", 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

const solutions = (allNumbers) => {
    const numbers = [];
    const zeros = []

    allNumbers.forEach((number, index) => {
        if (number === 0 || number === '0') {
            zeros[zeros.length] = number;
        } else {
            numbers[numbers.length] = number;

        }
    })

    return [
        ...numbers,
        ...zeros
    ]
};

// console.log(solutions(allNumbers));



const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const getOddNumbers = (numbers) => {
    // const newNumbers = numbers.map((number, index) => {
    //     console.log(number, index);
    //
    //     if (number % 2 !== 0) {
    //
    //     }
    // })
    //
    // console.log(newNumbers)

    const oddNumbers = [];
    const evenNumbers = {};

    numbers.forEach((number, index) => {
        if (number % 2 !== 0) {
            oddNumbers.push({index, number});
        } else {
            evenNumbers[index] = number;
        }
    })

    // const rightOddNumbers = oddNumbers.reduce((result, number) => {
    //     console.log(number);
    // }, {})

    const rightOddNumbers = [...oddNumbers];



    console.log(oddNumbers);
    // console.log(evenNumbers);

};

// console.log(getOddNumbers(numbers));




// HTML
// addEventListener('DOMContentLoaded', (event) => {
//     const greetingsBlock = document.getElementById('identificator');
//
//     console.log(greetingsBlock);
// })

// const greetingsBlock = document.getElementById('identificator');
// const greetingsBlockClass = document.getElementsByClassName('greetings');
// const greetingsBlockTag = document.getElementsByTagName('div');
//
//
// const greetingsBlockSelectorAll = document.querySelectorAll('div p');
// const greetingsBlockSelector = document.querySelector('.greetingsNew');

// for (const item of greetingsBlockSelector) {
//     // console.log(item);
// }
// console.log(greetingsBlockSelector);

// greetingsBlockSelector.style.backgroundColor = 'blue';

// greetingsBlockSelector.classList.add('backgroundColor');
// greetingsBlockSelector.classList.remove('backgroundColor');


console.clear();

// Task 1
const chuck = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const newArray = [];
const getSizeArray = (chuck, size) => {
    if (chuck.length >= size) {
        const threeElements = chuck.splice(0, size);
        newArray.push(threeElements);
        getSizeArray(chuck, size);
    } else if (chuck.length < size && chuck.length !== 0) {
        newArray.push(chuck);
    }

    return newArray;
};

// console.log(getSizeArray(chuck, 4));



// Task 2

const URLPosts = 'https://jsonplaceholder.typicode.com/posts/';
const URLUsers = 'https://jsonplaceholder.typicode.com/users';

// const URL = [URLPosts, URLUsers]
//
// const getPosts = async () => {
//     try {
//         const getPromise = URL.map((url) => {
//             return fetch(url).then(response => response.json());
//         })
//
//         const promise = await Promise.all(getPromise)
//
//         // console.log(promise[0])
//
//         const posts = promise[0];
//         const users = promise[1];
//
//         // console.log(users.length)
//
//         const newPostArray = []
//
//         const newMapIds = new Map();
//         const newMapTitles = new Map();
//         const allTitleFromUser = [];
//
//         for (const post of posts) {
//             newMapIds.set(post.userId, post.userId);
//
//             if (post.userId === newMapIds.get(post.userId)) {
//                 newMapTitles.set(newMapIds.get(post.userId), post.title)
//             }
//             // newMap.set(post.userId, allTitleFromUser);
//         }
//
//         // console.log(Object.entries(newMapTitles));
//         console.log(newMapTitles);
//         //
//         // const responseUser = users.reduce((result, {name, ...rest}) => {
//         //         result.push({
//         //             name,
//         //             rest,
//         //             title: newMap.get(rest.id),
//         //         })
//         //
//         //     return result;
//         // }, []);
//         //
//         // console.log(responseUser)
//
//     } catch (e) {
//         console.log(e);
//     }
// };
//
// getPosts();

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const aggregateUsersPosts = async () => {
    try {
        const [users, posts] =  await Promise.all([
            fetch(`${BASE_URL}/users`).then(response => response.json()),
            fetch(`${BASE_URL}/posts`).then(response => response.json()),
        ]);

        const UserIdPostMap = new Map();

        posts.forEach((post) => {
            if (!UserIdPostMap.has(post.userId)) {
                UserIdPostMap.set(post.userId, []);
            }

            UserIdPostMap.get(post.userId).push(post);
        })


        return users.map((user) => {
            return {
                ...user,
                myPost: UserIdPostMap.get(user.id),
            }
        });

    } catch (e) {
        console.log(e)
    } finally {
        console.log('Completed!')
    }
};


(async () => {
   const data = await aggregateUsersPosts();

    console.log(data);
})()









