localStorage.setItem('myValue', 100);
localStorage.setItem('user', JSON.stringify({name: 'Alex', age: 25}));

// console.log(JSON.parse(localStorage.user).age);
console.log(localStorage.lol);
console.log(localStorage.getItem('lol'));
console.log(JSON.parse(localStorage.getItem('user')).name);

// localStorage.removeItem('myValue');

console.log(localStorage);

// localStorage.clear();

console.log(localStorage);


localStorage.setItem('x', 1);

console.log(localStorage.length);
console.log(localStorage.key('x'))

console.clear();

localStorage.clear();


sessionStorage.setItem('secretValue', 100);



// cookie

document.cookie = 'user=Alex; expires=Thu, 01.01.2024';

console.log(document.cookie);









