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