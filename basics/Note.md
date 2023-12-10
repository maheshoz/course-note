
```sh

node -v
npm -v

npx -v

npx create-reat-app react-intro

npm start

```
https://github.com/codiku/react-introduction


Virtual dom

Normal dom updates entire body, virtual dom updates only the state changes, checks before after dom tree and updates only the changed dom node
```html
<body id="body">
  <h1>Hello</h1>
  <p>Time: </p>

  <script>
    function updateTime() {
      document.getElementById("body").innerHTML = `
        <h1>Hello</h1>
        <p>Time: ${new Date().toLocaleTimeString()} </p>
      `;
    }

    setInterval(updateTime, 1000);
  </script>
</body>
```
https://github.com/codiku/react-introduction/tree/001-first-component/src

```js
//index.js

// Import some react tools
import ReactDOM from "react-dom/client";
// Import our first component : App
import { App } from "./App";
// Target the root div
const rootDiv = document.getElementById("root");

// Transform the root div into a react node
const reactRoot = ReactDOM.createRoot(rootDiv);

// Inject our App component into the react node
reactRoot.render(<App />);

// App.js
export function App() {
  return "Hello";
}


``` 

things you can render
```js
// App.js
export function App() {
  return "Hello";
  return 2;
  return 2+2;
  return ['a', 'b']; //renders ab
  return <div></div>; // return 1 parent or fragment
  //empty render values
  return true;
  return false;
  return null;
  return undefined;
  // error
  // cannot render objects, crashes 
  return {};
  return {'name': 'js'};

}
```

import export

```js
// a.js
export const car = "Mustang";
export const color = "red";
export default function drive() {
  conosle.log('Vroom');
}

//or
// export { car, color }

//b.js
import { car, color }, drive from './a';
console.log(car, color)
drive();

```

Props

we can pass props as string,nums, objects or functions , jsx and use in other components

we can omit {} only for strings while passing props
Props are readonly , we can't reassign 
```js

export function App() {

  return (
    <>
      <Greetings
        firstName={"John"}
        lastName= "doe"
        age={22}
        car={{ brand: "Viper", color: "red", speed: 200 }}
        printHello={function () {
          console.log("hello");
        }}
        imageJSX = {<img src="https://picsum.photos/300/200" alt="img"/>}
      >
        <img src="https://picsum.photos/200/100" alt='img'/>
        <p>Props children paragraph </p>
      </Greetings>
    </>
  );
}


export function Greetings(props) {
  console.log(props);

  return (
    <ul>
      <li>name prop - {props.firstName}</li>
      <li>Age - {props.age}</li>
      <li>Car details - brand {props.car.brand}</li>
      <li>{ `Car brand ${props.car.brand} color-${props.car.color}` }</li>
      <li>{props.printHello()}</li>
      <li>{props.imageJSX}</li>
      <li>Props children - {props.children}</li>
    </ul>
  );
}

// use camelcase for html properties
// we can use just checked instead of checked={true} 

<input type="checkbox" checked={false} placeholder="check" 
      title="checkbox" onChange={()=>{}}/>
```

render conditionally based on prop values
we cant mutate props
```js
function ConditionalRender(props) {
  console.log(props)

  if(props.age > 100){
    return <p>Age morethan 100</p>
  } else {
    return <p> young </p>
  }
}

 <ConditionalRender age={103}/>

```

State
Component rerenders on state or prop change

```js
import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
  // let age = 22;
  const [age, setAge] = useState(22);
  // function increaseAge() {
  //   age++;
  //   console.log(age);
  // }
  function increaseAge() {
    setAge(age + 1);
  }
  console.log('AgeCounter rerender !');

  return (
    <div>
      <button onClick={increaseAge}>Increase Age</button>
      {/* <p>You are {age} years old</p> */}
      <AgeDisplay age={age} />
    </div>
  );
}


export function AgeDisplay(props) {
  console.log('AgeDisplay rerender');
  return <p>You are {props.age} years old</p>
}

```

setState takes some time to update the original value
```js
import { useState } from "react";

export function App() {
  const [movie, setMovie] = useState("Lord of the ring");

  function updateMovie() {
    setMovie("Fight club");
    console.log(movie);
  }
  console.log("rerender - ", movie);
  return (
    <>
      <button onClick={updateMovie}>{movie}</button>
    </>
  );
}
 
```
WE cannot do setState directly inside component, will lead to infinite rerenders

```js
import { useState } from "react";

export function App() {
  const [movie, setMovie] = useState("Lord of the ring");

  setMovie('Thor');
  return (
    <>
    </>
  );
}
```
### Styling

1. inline css(js)

```js
 <div style={{
        height: 100,
        width: 100,
        backgroundColor: 1 == 2 ? "red" : "blue",
        borde: '3px solid blue', 
      }}></div>
```
2. css files

```js
//style.css
.container {
  height: 100px;
  weight: 200px;
  background-color: red;
}


import "./style.css";

export function Car() {
  return <div className="container"></div>
}
```
3. css modules
automatically provides unique classnames 
```js
// style.module.css
.root{
  margin: 0 auto;
}

import s from "./style.module.css";

export function Car() {
  return <div className={s.root}></div>
}
```
Multiple css module styles 

```js
export function Car() {
  return <div className={`${s.box} root ${s.top}`}></div>
}
```


### callback functions
we can pass fn from parent to child and run in child components with props
```js

export function App() {

  function hello(value) {
    alert("Hello from <App />" + value);
  }
  return (
    <>
    <Car onCarClick={hello}/>
    </>
  );
}

export function Car(props) {

  function handleParaClick() {
    props.onCarClick(2);
  }
  const onClick = () => {
    props.onCarClick(2);
  }

  return <p className="box" onClick={handleParaClick}>Mustang</p>

  return <p onClick={onClick}>Click </p>
}
```

Bable is used behind the scenes to transpile jsx and ES6 to ES5

https://jstool.gitlab.io/babel-es6-to-es5/

https://babeljs.io/repl


Webpack the asset bundler
It minifies, bundles the files to make production build