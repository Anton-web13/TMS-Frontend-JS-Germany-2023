// localStorage.setItem('myValue', 100);
// localStorage.setItem('user', JSON.stringify({name: 'Alex', age: 25}));
//
// // console.log(JSON.parse(localStorage.user).age);
// console.log(localStorage.lol);
// console.log(localStorage.getItem('lol'));
// console.log(JSON.parse(localStorage.getItem('user')).name);
//
// // localStorage.removeItem('myValue');
//
// console.log(localStorage);
//
// // localStorage.clear();
//
// console.log(localStorage);


// localStorage.setItem('x', 1);
//
// console.log(localStorage.length);
// console.log(localStorage.key('x'))
//
// console.clear();
//
// localStorage.clear();
//
//
// sessionStorage.setItem('secretValue', 100);



// cookie

// document.cookie = 'user=Alex; expires=Thu, 01.01.2024';

// console.log(document.cookie);





// HM
// Task 1

const banknotes = [1, 5, 10, 20, 50, 100, 500].sort((a, b) => {
    return b - a;
});

let restMoney = 159;

const getMoney = (banknotes, restMoney) => {
    const myCash = [];

    for (let i = 0; i < banknotes.length; i++) {
        const banknote = banknotes[i];

        const valueOfBanknote = Math.floor((restMoney / banknote));

        for (let i = 0; i < valueOfBanknote; i++) {
            myCash.push(banknote);
            restMoney = restMoney - banknote;
        }
    }

    return myCash;
};

console.log(getMoney(banknotes, restMoney));


// Task 2
















