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







