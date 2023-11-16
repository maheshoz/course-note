import greet, {
  convertCurrency,
  BASE_API_URL
} from './utilities.js'


const euroAmount = convertCurrency(200);
console.log(euroAmount);

fetch(`${BASE_API_URL}/user/22`)

greet();

// import export ES modules

// Common JS
// module.exports = {
//   BASE_API_URL, greet
// }

// require('./utilities.js')