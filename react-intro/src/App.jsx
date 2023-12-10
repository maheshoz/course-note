import { AgeCounter } from "./AgeCounter";
import { Car } from "./Components/Car";
import { Greet } from "./Components/Greet/Greet";
import { Greetings } from "./Greetings";

import './global.css'

export function App() {
  // return "Hello from App.js";
  // return [];
  // return ['a', 'b'];

  function hello(value) {
    alert("Hello from <App />" + value);
  }

  return (
    <>
      <Car onCarClick={hello}/>
      <Greet/>
      <div style={{
        height: 100,
        width: 100,
        backgroundColor: 1 == 2 ? "red" : "blue",
        borde: '3px solid blue', 
      }}></div>
      <hr />
      <AgeCounter />
      <hr />
      <input type="checkbox" checked={false} disabled placeholder="check" 
      title="checkbox" onChange={()=>{}}/>
      <input type="checkbox" checked onChange={()=> console.log("** clicked checkbox")}/>
      <h1>Welcome to react </h1>
      <Greetings
        firstName={"John"}
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
      <hr />
      <ConditionalRender age={103}/>
    </>
  );
}


function ConditionalRender(props) {
  console.log(props)

  if(props.age > 100){
    return <p>Age morethan 100</p>
  } else {
    return <p> young </p>
  }
}