export function Car(props) {

  function handleParaClick() {
    props.onCarClick(2);
  }

  return <p className="box" onClick={handleParaClick}>Mustang</p>
}