const logCase = (value) => {
    let counter = 0;
    switch (value) {
        case 1: {
            // console.log('Hello');
            counter += 2;
            // return;
            break;
        }

        case 2: {
            // console.log('World');
            counter += 5;
            // return;
            break;
        }

        case 3: {
            let x = 5;
            // console.log('I love JS');
            counter += 10;
            // return;
            break;
        }

        case 4:
        case 5: {
            // console.log(x);
            counter = 100;
            break;
        }

        default: {
            console.log('Value is not compatible');
        }
    }

    return counter ** 1;
};

// console.log(logCase(5));













// const sum = (a, b) => a + b;
//
// sum(1, 2,3,4,5,6);

const sum = (...numbers) => {
    return numbers.reduce((result, number) => number + result );
};

const [one, two, ...rest] = [1, 2, 3, 4, 45, 65];

// console.log(sum(1, 2, 3, 4, 45, 65));

// console.log(sum());



class Main{
    saHello() {
        console.log('Hello');
    }
}

class Child extends Main {
    isGood = true;
}

const child = new Child();

// console.log(child instanceof Main);





const array = [];

// console.log(array instanceof Array); // true
// console.log(array instanceof Object); // true





// Коррирование
// const sum1 = (firstNumber) => (secondNumber) => (thirdNumber) => {
//     return firstNumber + secondNumber + thirdNumber;
// };


const sum1 = (firstNumber) => {
    return (secondNumber) => {
        return (thirdNumber) => {
            return firstNumber + secondNumber + thirdNumber;
        }
    }
}


// console.log(sum1(1)(2)(4));



const arr = [1,2,3];

const double = (multiplier) => (number, index, currentArray) => {
        return number * 2 + multiplier;
};

const doubleNums = (arr, multiplier) => {
    // const double = (value) => (number, index, currentArray) => {
    //     return number * 2 + value;
    // };

    // const double = (value) => {
    //     return (number, index, currentArray) => {
    //         return number * 2 + value;
    //     };
    // };

    return arr.map(double(multiplier));

    // return arr.map((number) => number * 2);
};

// console.log(doubleNums(arr, 1));











