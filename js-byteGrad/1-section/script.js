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


// ADVANCED JS

//arrays
let numbers = [22, 33 ,44, 55]
// push()
numbers.push(300)
// forEach()
numbers.forEach( n => {
    console.log(n);
})
// map()
const newNums = numbers.map( n => {
    return n * 10;
});
console.log(newNums);

// some()
// atleast one ele has a value
const resultBoolean = numbers.some( n => {
   return  n > 10
})

// find()
// get 1st ele with true condition
const r = numbers.find( n => {
    return n > 10;
})
// filter()
// new arr with filter
const newFilterArr = numbers.filter(n => {
    return n > 20;
});

console.log(newFilterArr);


// OBJECTS
// obj['key']
// obj.key

// callback functions
function doSomething() {

}
const calcPrice = ()=> {}

[5,3,6].some(function() {
    // callback func , no name
})

// methods
// arr.push()

const obj = {
    name : 'john',
    hobbies : ['golf', 'skiing'],
    // calculateAge : () => {
    //     return 30 + this.hobbies.length; //Cannot read properties of undefined (reading 'length')
    // }
    // this in arrow func refers to window object, not current obj
    calculateAge: function(){
        console.log(this);   // obj
        return 30 + this.hobbies.length;  //32
    }

};

console.log(obj.calculateAge());


// function default parameters
const p = (meters = 100)=> {
    return 30 + meters;
}

p(); // 120
p(20); // 50

// Destructuring
var personObj = {
    name : 'john',
    age : 45,
    hobbies: ['golf', 'tennis'],
    city : 'NYC'
};

const {age, city} = personObj;

var arr = [3, 4, 5, 56,2];

var [d, b , m] = arr;

console.log(d,b,m);

// Spread operator , combine 2 arr
const numbers1 = [5, 10, 15]
const numbers2 = [20, 30, 40]

const newNumbers = [...numbers1, ...numbers2];
console.log(newNumbers);

// Primitives vs Reference values
// nums, str, bool, 
// arr, obj

// Undefined vs Null
// short-circuiting with && ||

var pr = 100;

pr > 50 && console.log(33);

pr > 500 || console.log(33);

// Async Await - promise

// modules - import ,export
// export default func , export API
// import { API}, func from './utiliy.js'

// loops - for, forEach(), while, for of(iterable)
// switch

// window object
console.log(window);
console.log(window.document);
console.log(window.console);
console.log(window.fetch);
console.log(window.location);

// Math 

console.log(Math.floor(5.95)); // 5
console.log(Math.ceil(5.001)); // 6

// random num
const res = Math.random()* 100; // b/w 0 and 100

// Date
const date = new Date(2023, 10, 16);
console.log(date);
date.setFullYear(2022);
console.log(date);

// OOP in js
const apartment1 = {
    sqMeters : 50,
    numberOfBedrooms: 3,
    isBig: function() {
        return this.sqMeters> 100 ? true : false;
    },
    calculatePrice: function() {
        return this.sqMeters * this.numberOfBedrooms;
    }
}

console.log(apartment1);
console.log(apartment1.sqMeters);
console.log(apartment1.isBig());



// class Apartment {
//     constructor(sqMeters, numberOfBedrooms) {
//         this.sqMeters = sqMeters;
//         this.numberOfBedrooms = numberOfBedrooms;
//     }

//     isBig() {
//         return this.sqMeters > 100 ? true : false;
//     }

//     calculatePrice() {
//         return this.sqMeters * this.numberOfBedrooms;
//     }
// }

// const a1 = new Apartment(50, 3);
// const a2 = new Apartment(150, 5);

// console.log(a1);
// console.log(a1.isBig()); // methods are in prototype object

// constructor function
function Apartment(sqMeters, numberOfBedrooms) {
    this.sqMeters = sqMeters;
    this.numberOfBedrooms = numberOfBedrooms;
}

Apartment.prototype.isBig = function () {
    return this.sqMeters > 100 ? true : false;
}

Apartment.prototype.calculatePrice = function () {
    return this.sqMeters * this.numberOfBedrooms;
}
const ap1 = new Apartment(50, 3);

console.log(ap1);
console.log(ap1.isBig());


// PROMISES

// 1) crate a promise
const p1 = new Promise((resolve, reject) => {
    const numberOfCustomer = 10;

    if (numberOfCustomer > 5) {
        resolve('Success'); // fullfilled with value
    } else {
        reject('Not enough promotion'); // failure with reason
    }
});

// 2) Consume a promise with .then() & .catch()
p1.then(value=> {
    console.log(value);
}).catch(reason => {
    console.log(reason);
});


// 3) Consume a promise with async await
const checkResults = async ()=> {
    try{
        const value = await p;
        console.log(value);
    } catch(reason) {
        console.log(reason);
    }
};
checkResults();

// 4) why & where use prmoses 
// vast majority of code is synchronous.
// const a =1;
// const b =2;
//this isn't problem, cuz these operations are very fast,
// so they only freeze our program for a very short amount of time

// However, some operations may take a long time. we want to use asynchronous code for them
// so they don't freeze our program for so long.  Asynchronous code was commonly implemented with 
// callback functions, but now increasingly with promises

// Most common examples of ussing promises
// - on frontend : Network requests (eg. Fetch API or Axios library)
// - on backend : Interacting with file system (eg, reading a file)

// 5) Fetch API (most common example of promises)
fetch("https://reqres.in/api/users")
.then((res) => {
  if (!res.ok) {
    // console.log("problem");
    return Promise.reject('4xx or 5xx problem');
    
  }

  // console.log("res ok", res.ok);
  // let resJson = res.json(); // is a promise
  // console.log("res josn - ", resJson);

  // return resJson;
  return res.json();
})
.then((data) => {
  console.log(data.data[2].email);
})
.catch((error) => console.log(error));


// 6) Promise.all / Promise.any
// fetching 2 call, photos api, data api

Promise.all([
    fetchPhotoPromise,
    fetchCommentsPromise
]).then(values => {
    // render post
});

// fetch from any 1, whicheve promise returns value first use that 
Promise.any([
    fetchPhotoServer1Promise,
    fetchPhotoServer2Promise
]).then(value => {
    // render
})


// EVENT LOOP
// callstack , queue
// Most common callback functins that go in queue are
// - timers (setInterval, setTimeout)
// - DOM (eg click handler)
// - fetch - promises are prioritized and place first in queue
// when call stack is empty , queue places them in it


// function greeting() {
//     console.log('hello');
//     ok();
//     console.log('hi');
// }
// function ok() {
//     console.log('ok');
// }
// greeting();

// callstack places greeting(), then ok(). pops ok after execution then greeting

// function greeting() {
//     console.log('hello');
//     setTimeout(time, 1000);
//     ok();
//     console.log('hi');
// }
// function ok() {
//     console.log('ok');
// }
// function time() {
//     console.log('time');
// }
// greeting();
// o/p , hello ok hi time
// setTimouts time will be placed in queue, after callstack execution of
// ok, greeting is don, time will run


function greeting() {
    console.log('hello');
    setTimeout(time, 1000);
    ok();
    console.log('hi');
}
function ok() {
    console.log(99* 9999999999); // eg consider as heavy op that takes 5sec
    console.log('ok');
}
function time() {
    console.log('time');
}
greeting();

// o/p
// hello
// 989999999901
// ok
// hi
// time

// if ok() takes 5sec to run in callstack, the time in queue has to wait 5s and when 
// callstack is empty time will run, so the setTimeout may take more than 1s to run
// we can consider it as the minimum time to run time()