export function AgeDisplay(props) {
  console.log('AgeDisplay rerender');
  return <p>You are {props.age} years old</p>
}