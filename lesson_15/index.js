fetch('https://jsonplaceholder.typicode.com/posts/1', {
    body: JSON.stringify({
        title: "New Year",
        body: "New Year Decription",
    }),
    method: "PATCH",
    Headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    },
})
    .then(response => response.json())
    .then((data) => {
    // console.log(data);
}).catch((e) => {
    console.log(e);
});





// const container = document.querySelector('.container');
//
// const words = ['Alex', 'Max', 'Maria', 'Tom'];
//
// words.forEach((word) => {
//     const divElement = document.createElement('div');
//     divElement.textContent = word;
//     divElement.classList.add('item');
//     container.append(divElement);
// })

// console.log(container);


// const btn = document.querySelector('button');

// btn.setAttribute('disabled', true);

// setTimeout(() => {
//     btn.removeAttribute('disabled');
// }, 3000);

//
// const counter = () => {
//     let value = 0;
//
//     return () => {
//         return value +=1;
//     }
// }
//
// const myCounter = counter();

// let count = 0;
// btn.addEventListener('click', (event) => {
//     // count++;
//     event.target.style.backgroundColor = myCounter() % 2 === 0 ? 'red' : 'blue';
// });


const containerDiv = document.querySelector('.container');
const divIncideContainer = document.querySelector('#identifier');
const buttonIncideDiv = document.querySelector('#btn');

containerDiv.addEventListener('click', (event) => {
    console.log('Container');
});

divIncideContainer.addEventListener('click', (event) => {
    console.log('Div Inside Container');
});

buttonIncideDiv.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    event.stopImmediatePropagation();
    console.log('Button');
});



















