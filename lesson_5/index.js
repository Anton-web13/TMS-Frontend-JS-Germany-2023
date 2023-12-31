const sum = function (a,b) {
    return a+b;
}

// => function
const arrowSum = (a,b) => a+b;
const arrowSum1 = (a,b) => {
    return a+b;
}



// arguments
const someFn = function () {
    // console.log(arguments[2]);
    // console.log(arguments.length);

    for (const arg of arguments) {
        console.log(arg);
    }
}

const arrowFunction = () => {
    console.log(arguments);
}

someFn(1,7,3,4,5,6,7,8,9);


console.clear();



// callback
const someFunction = (fn) => {
    // console.log(fn);
    const result = fn();

    console.log(result);
}

const sumCallback = (a,b) => a+b;

someFunction(() => {
    console.log("Hello!")
});

someFunction(function () {
    console.log("World!")
});

someFunction(() => sumCallback(1,2));
// someFunction(() => {
//     return sumCallback(1,2);
// });


console.clear();



// map, filter, forEach, find, findIndex, reduce
const doubleNumbersList = (numbers) => {
    // const result = numbers.map((currentElement, index, currentArray) => {
    //     console.log(currentElement);
    //     console.log(index);
    //     console.log(currentArray);
    // })

    // const result = numbers.map((currentElement) => {
    //     return currentElement * 2;
    // })

    if (!Array.isArray(numbers)) {
        return;
    }

    const result = numbers.map((currentElement) => {
        return currentElement.toString();
    })

    return result;
}

console.log(doubleNumbersList("234353")); // 2,4,6

// number to String
const number = 5;
const string = number.toString(); // v1
const string2 = String(number); // v2
const string3 = `${number}`; // v3
const string4 = number + " "; // v4
console.log(string4, typeof string4);


// String to number

const stringNew = "5";

const numberToString = Number(stringNew);
const numberToString2 = +stringNew;


console.log(numberToString2, typeof numberToString2);


console.clear();





const matrix = [[1,2,3], [3,4,5], [5,6,7], [6]];

console.log(matrix[2][2]);


console.clear();








const doubleNumbersList2 = (numbers) => {
    if (!Array.isArray(numbers)) {
        return;
    }

    const result = numbers.map((currentElement) => {
        return currentElement.toString();
    })

    return result;
}

console.log(doubleNumbersList2([1,2,3])); // 2,4,6
// console.clear();
//
// const doubleNumbersList2_alternative = (numbers) => {
//     const result = [];
//
//     for (let i = 0; i < numbers.length; i++) {
//         result.push(String(numbers[i]));
//     }
//
//     return result;
// }
//
// console.log(doubleNumbersList2_alternative([1,2,3])); // 2,4,6


console.clear();

// filter
// console.log("w345354");

const matrix1 = [[1,2], [2,3], [3,4,5], [6]];

console.log(matrix1[2][0]);


console.clear();



const doubleNumbersList_2 = (numbers) => {
    // const result = [];

    // for (let i = 0; i < numbers.length; i++) {
    //     result.push(String(numbers[i]));
    // }

    return numbers.map((number) => {
       return number.toString();
    })

    // return numbers.map(function (number){
    //     return number.toString();
    // })


}

console.log(doubleNumbersList_2([3,4,5,6,67,78]));

console.clear();

// filter

const method_filter = (numbers) => {
    if (!Array.isArray(numbers)) {
        return;
    }

    return numbers.filter((number) => {
        return number > 3;
    });

}

console.log(method_filter([2,3,4,5,6,6]));

// console.clear();


// const method_filter_for = (numbers) => {
//     if (!Array.isArray(numbers)) {
//         return;
//     }
//
//     const result = [];
//
//     // for (let i = 0; i < numbers.length; i++) {
//     //     if (numbers[i] === 3) {
//     //         result.push(numbers[i])
//     //     }
//     // }
//
//     for (const number of numbers) {
//         if (number > 3) {
//             result.push(number)
//         }
//     }
//
//     return result;
//
// }
//
// console.log(method_filter_for([2,3,4,5,6,6]));

console.clear();

// forEach
const method_filter_forEach = (numbers) => {
    if (!Array.isArray(numbers)) {
        return;
    }

    const result = [];

    numbers.forEach((number) => {
        if (number >= 3) {
            result.push(number);
        }
    })

    return result;

}

console.log(method_filter_forEach([2,3,4,5,6,6]));

console.clear();




// find, findIndex
const usersList = ['Alex', 'Max', 'Vika', 'Anton', 'Petr', 'Alexandra'];

const findNum = (users, userToSearch) => {
    const foundUser = users.find((user) => {
        return user.toLowerCase() === userToSearch.toLowerCase();
    })

    if (foundUser) {
       return foundUser;
    }

    return 'User not found'
}

// console.log(findNum(usersList, 'anton'));

const findIndexUser = (users, userToSearch) => {
    const foundUserIndex = users.findIndex((user) => {
        return user.toLowerCase() === userToSearch.toLowerCase();
    })

    if (foundUserIndex !== -1) {
        return foundUserIndex;
    }

    return 'User not found'
}

console.log(findIndexUser(usersList, 'max'));





console.clear();

const usersListTask = ['Alex', 'Max', 'Vika', 'Anton', 'Petr', 'Alexandra'];


const findUserTask = (users, letters) => {

    const lettersLowerCase = letters.map((letter) => {
        return letter.toLowerCase();
    });

    return users.filter((user) => {
        const firstLetter = user[0].toLowerCase();
        // console.log(firstLetter);

        // letters.forEach((letter) => {
        //     if (!letters === letter) {
        //         return user;
        //     }
        // });

        // if (!letters.includes(firstLetter)) {
        //     return user;
        // }
        //
        // return !letters.includes(firstLetter);

        const isLetter = lettersLowerCase.findIndex((letter) => {
            return letter === firstLetter
        }) == -1;

        return isLetter;

    })
}

// console.log(findUserTask(usersListTask, ['M', 'p']));


// for

const findUserFor = (users, blackList) => {

    const result = [];
    const lowerCaseBlackList = [];
    for (let i = 0; i < blackList.length; i++) {
        const letter = blackList[i].toLowerCase();
        lowerCaseBlackList.push(letter);
    }

    for (let i = 0; i < users.length; i ++) {
        const firstLetterUser = users[i][0].toLowerCase();

        if (!lowerCaseBlackList.includes(firstLetterUser)) {
            result.push(users[i]);
        }
    }

    return result;

}

// console.log(findUserFor(usersListTask, ['M', 'p']))







// console.clear();

// 1
const lettersDown = (array) => {

    // const result = [];
    //
    // array.forEach((value) => {
    //    if (value === value.toUpperCase()) {
    //        newValue = value.toLowerCase();
    //    } else {
    //        newValue = value.toUpperCase();
    //    }
    //
    //    result.push(newValue);
    //
    //
    // })
    //
    // return result;

    if (!Array.isArray(array)) return;

    return array.map((letter) => {
      if (letter === letter.toLowerCase()) {
          return letter.toUpperCase();
      }

      return letter.toLowerCase();
    })


}

// console.log(lettersDown(['a', 'F', 'g','D', 'J', 'H']));






// console.clear();
// 2


const arrayOfNumbers = (numbers) => {

    const result = [];
    // return numbers.map((number, index) => {
    //     return {
    //         Value: number,
    //         Index: index,
    //         Squared: number * number,
    //     }
    // })

    numbers.forEach((number, index) => {
        return result.push(`Value: ${number}, Index: ${index}, Squared: ${number * number}`);
    })

    return result;
}

// console.log(arrayOfNumbers([3,4,6]));




const getDetailedInfo = (numbers) => {
    if (!Array.isArray(numbers)) return;

    return numbers.map((number, index) => {
        return `Value: ${number}, Index: ${index}, Squared: ${number * number}`
    })
}

// console.log(getDetailedInfo([3,4,6]));




const getDetailedInfoForOf = (numbers) => {
    if (!Array.isArray(numbers)) return;

    const result = [];

    let index = 0;

    for (const number of numbers) {
        result.push(
            `Value: ${number}; index ${index++}; Squared: ${number ** 2}`
        )
    }

    return result;


}

// console.log(getDetailedInfoForOf([3,4,6,8]));



const getDetailedInfoWhile = (numbers) => {
    if (!Array.isArray(numbers)) return;

    const result = [];

    let i = 0;

    while (i < numbers.length) {
        const number = numbers[i];

        result.push(
            `Value: ${number}; index ${i++}; Squared: ${number ** 2}`
        )
    }

    return result;
}

// console.log(getDetailedInfoWhile([3,4,6,8]));


// console.clear();
// 3

const lettersNumbers = (data) => {

    // const onlyLetters = [];

    // return data.filter((item) => {
    //     if (typeof item !== "string") {
    //         // return onlyLetters.push(value);
    //         return item;
    //     }
    // })


    return data.filter((item) =>{
        // console.log(item);

        // const isString = typeof item === 'string';

        // return isString && item.length === 2;
        // if (typeof item === 'string' && item.length === 2) {
        //     return item;
        // }

        return typeof item === 'string' && item.length === 2;
    })

    // return numbers.filter((number) => {
    //     return number > 3;
    // });

    // return onlyLetters;
    //
    // return value.map((word) => {
    //
    //     const wordToString = word.toString();
    //
    //     if (wordToString.length === 2) {
    //         return word;
    //     }
    // })

}

console.log(lettersNumbers(["Hi", 2, 3, 4, 5, "JS", 2, "C++", [1,2]]));








