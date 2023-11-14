// https://github.com/ByteGrad/Professional-JavaScript-Course/blob/master/02%20-%20Modern%20JS%20Fundamentals/script.js


// -- variables (var/let/const) & data types/structures (strings/numbers/booleans/arrays/objects) --
// const description = 'We need a new floor.';
// const squareMeters = 100;
// const specialCoating = true;
// const floorOptions = ['carpet', 'hardwood', 'tiles'];
// const renovationJob = {
//     ownerName: 'John',
//     maximumPrice: 5000,
//     category: 'bathroom',
//     newShower: true
// };


// -- traditional functions vs arrow functions --

// function calculatePrice(sqMeters) {
//     return 1000 + sqMeters;
// }

// var calculatePrice = function(sqMeters) {
//     return 1000 + sqMeters;
// };

// const calculatePrice = (sqMeters) => {
//     return 1000 + sqMeters;
// };

// const calculatePrice = sqMeters => 1000 + sqMeters;


// -- string concatenation vs template literals --
// const price = 5000;
// const result = 'The total cost will be: ' + price;
// const result = `The total cost will be: ${price}`;


// -- if-else vs ternary operator --
// const price = 5000;

// if (price) {
//     console.log('hello');
// } else {
//     console.log('blabla');
// }

// price > 3000 ? console.log('expensive') : console.log('cheap');

// if(true){
//   var p = 2;
//   let a = 3;
// } else {
//   let b = 3;
// }
// console.log(p) // 2  let,const are block scoped, var is function scoped else adds to window object
// console.log(a); // Uncaught ReferenceError: a is not defined

// console.log(document.images)
// console.log(document.forms)

// -- manipulating HTML and CSS --
const headingEl = document.querySelector('.heading');

// headingEl.textContent = 'Hello <span class="heading--big">everyone</span>!';
// headingEl.innerHTML = 'Hello <span class="heading--big">everyone</span>!';
headingEl.insertAdjacentHTML('beforebegin', 'Hello <span class="heading--big">everyone</span>!');

// headingEl.style.fontSize = '55px';
// headingEl.classList.add('heading--big');
// headingEl.classList.remove('heading--big');
// headingEl.classList.toggle('heading--big');




// -- events and functions for handling events (also called "event handlers") --
// const headingEl = document.querySelector('.heading');

const clickHandler = () => {
    headingEl.style.color = 'red';
    headingEl.classList.toggle('heading--big');
    console.log('changed color');
};

headingEl.addEventListener('click', clickHandler);



//Strings
const text = 'Hello Javascript';

// length
console.log(text.length)
//includes
console.log(text.includes('java'));
// toUpperCase() , trim(), trimStart(), trimEnd()
// substring()
// chaining
text.toUpperCase().trimEnd();

// NUMBERS
const total = 1543.345

// toFixed() -- 0
console.log(total.toFixed()) //1543
// toFixed() -- 2 
console.log(total.toFixed(2)) //1543.34


// BOOLEANS

// When checking a string
let str = 'Map of NYC';

if (!str.includes('NYC')) {
    console.log('text doesn\'t inlcude NYC');
} else {
    console.log('inlcudes');
}

// when dealing with server
const response = {
    statusCode: 500,
    ok: false,
    data: [1,2,3]
}

if(!response.ok) {
    console.log('response error');
}

// ARRAYS
let nums = [99, 3, 4, 22];

// length
console.log(nums.length);
// push()
nums.push(33);
nums.includes(33); // true

// forEach()
nums.forEach(function (num) {
    console.log(num * 2);
});

// objects in array
let data = [{
        name: 'john',
        age: 33
    },
    {
        name: 'mike',
        age : 22
    }

]

console.log(data[1].name);

// OBJECTS

let user = {
    name: 'john',
    age: 30,
    hobbies: ['sing', 'programming', 'reading'],
    address: {
        city: 'miami',
        state: 'florida'
    }
}
// object in object
console.log(user.address.city);

// property name is same as property value
const username = input.value;
const password = input.value;

const newUser = {
    // username:  username,
    username, 
    password
}

// passing ojbect as argument to function
const person = {
    name: 'john',
    age: 33
}

function logUser(user) {
    console.log(user.name);
    console.log(user.age);
}

logUser(person);

// INCREMENT DEC

// FUNCTIONS
// function declarations, func expressions, arrow func

// early return/ stop fun execution
const checkValidity = (num)=> {
    if(num < 0) {
        console.log('invalid');
        return;
    }
    console.log('valid');
}

checkValidity(-3);

// HOISTING
// var, func declaration is hoisted to the top
var num;
num = 0;

a = 10;
let a; // ref error

// Timers (setInterval , setTimeout)

setTimeout(function(){
    console.log('hi');
}, 2000);

// run every 2sec
setInterval(function(){
    console.log('hi');
}, 2000)

// FETCH API
const URL = 'https://jsonplaceholder.typicode.com/todos'
fetch(URL)
    .then((res)=>{
        if (!res.ok) {
            console.log('status');
        }
        return res.json();
    })
    .then((data)=>{
        console.log(data)
    })
    .catch( error=>{
        console.log(error);
    });


