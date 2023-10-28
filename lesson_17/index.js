'use strict';

// a = 5;
const a = 5;

console.log(a);


function b () {
    'use strict';

    const c = 1;

    console.log(c)
}

b();


const x = {
    a: 1,
}

delete x;

console.log(x);


function g(a,a,a) {
    console.log(a)
}

g(1,2,3);