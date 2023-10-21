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




