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