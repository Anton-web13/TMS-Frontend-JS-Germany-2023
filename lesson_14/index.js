
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

console.log(getOddNumbers(numbers));









