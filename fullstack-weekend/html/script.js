const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];


const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// console.log(CATEGORIES.find((cat) => cat.name = 'society'));
// console.log(CATEGORIES.find((cat) => cat.name = 'society').color);


const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector('.facts-list');

// Create DOM elements: Render facts in list
factsList.innerHTML = '';

// factsList.insertAdjacentHTML('afterbegin', '<li>John</li>')
// factsList.insertAdjacentHTML('afterbegin', '<li>Ram</li>')
// factsList.insertAdjacentHTML('afterbegin', '<li>asdfasdfasdf</li>')
// factsList.insertAdjacentHTML('beforeend', '<li>sammmm</li>')
// factsList.insertAdjacentHTML('beforebegin', '<li>before begin</li>')
// factsList.insertAdjacentHTML('afterend', '<li>after end</li>')


// Load data from Supabase

async function loadFacts() {
  
  const res = await fetch('https://yohonquollraclodvxxe.supabase.co/rest/v1/facts', {
    headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvaG9ucXVvbGxyYWNsb2R2eHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDY0MjUsImV4cCI6MjAxMjU4MjQyNX0.3PkvsnsU5Wq87WDLkhTdUz8Aez35swrpJV5Xq7bQ520',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvaG9ucXVvbGxyYWNsb2R2eHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDY0MjUsImV4cCI6MjAxMjU4MjQyNX0.3PkvsnsU5Wq87WDLkhTdUz8Aez35swrpJV5Xq7bQ520'
    }
  });
  const data = await res.json();
  console.log(data);
  
  const filteredData = data.filter((fact)=>fact.category === 'history');
  console.log('filtered data', filteredData);
  // console.log(data);
  createFactsList(data);
}

loadFacts();

createFactsList(initialFacts);

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}



// Toggle form visiblity
btn.addEventListener("click", function () {

  if (form.classList.contains("hidden")) {

    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {

    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});


// console.log([2, 44, 6].filter( 
//   function(el){ return el>10}
// ));

// console.log([2, 44, 6].filter( 
//   (el) => (el>10)
// ));

// return 1st element of true
// console.log([2, 44, 66].find( 
//   (el) => (el>10)
// ));



// console.log(btn);
// console.log( typeof(btn)); //object
// console.dir(btn);
// console.log(factsList)



// variables

// let votesInteresting = 23;
// let votesMindblowing = 5;
// const text = 'Lisbon is  the capital of Portugal';

// votesInteresting = votesInteresting + 1;
// votesInteresting++;
// console.log(votesInteresting);

// let totalUpvotes = votesInteresting + votesMindblowing;
// console.log('Upvotes: ', totalUpvotes);

// let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);

// // Functions

// console.log( parseInt('23.4444'));

/*

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less or equal to ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(1995));

// Arrow functions

// const calcFactAge2 = (year) => new Date().getFullYear() - year;
const calcFactAge2 = (year) =>  year <= new Date().getFullYear() 
  ? new Date().getFullYear() - year 
  : `Impossible year. Year needs to be less or equal to ${new Date().getFullYear()}`;

console.log("calcFuctAge Fun :", calcFactAge(2025));
console.log("calcFuctAge2 Fun :", calcFactAge2(2023));

let votesInteresting = 20;
let votesMindblowing = 20;

// if else if else

if (votesInteresting == votesMindblowing) {
  console.log("equal");
} else {
  console.log("something else");
}

// falsy values : 0, '', null, undefinded
// Truthy value:
// operators >, < , >=, !===,

if (votesMindblowing) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// Ternary operator
let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message = totalUpvotes > votesFalse ? "true fact" : "false fact";

console.log(message);

// String methods , template literal

const text = "List is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `the current fact is "${text}". It is ${calcFactAge(
  2015
)} years old. 
It is probably ${totalUpvotes > votesFalse ? "correct" : "not true"}. `;

console.log(str);



// Arrays

const fact =['Lisbon is capital of portugal', 2015, true]; 

// console.log(fact[1]);
// console.log('length : ',fact.length);
// console.log('last ele : ', fact[fact.length - 1]);

// // Array destructuring
// const [fact_text, createdIn, isCorrect] = fact;
// console.log(createdIn);

// creating new array
const newFact = [...fact, 'society'];
// or const newFact = ['society', ...fact];
console.log(newFact);

// Objects

const factObj = {
  text : 'lisbon is the capital of portugal',
  category: 'society',
  createdIn: 2015,
  isCorrect: true,
  createSummary : function() {
    return `The fact ${this.text} is from category ${this.category.toUpperCase()}`;
  }
}

console.log(factObj.text);
console.log(factObj.createSummary());

// Destructuring , for objects should use same name as properties

const {category, isCorrect} = factObj;

console.log(category);


//Looping through arrays

// [2,4,6,8].forEach( function(el) {
//   console.log(el);
// });

const times10 = [2, 4, 6, 8].map( function(el) {
  return el * 10;
});

// console.log(times10);

const allCategories = CATEGORIES.map( (el)=> el.name );

console.log( allCategories);

const factAges = initialFacts.map( (el)=> calcFactAge(el.createdIn)) ;

console.log(factAges);
console.log(factAges.join("-"));
*/

// DOM







 