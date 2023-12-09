// https://github.com/ByteGrad/Professional-JavaScript-Course/blob/master/03%20-%20Fancy%20Counter/resources.txt


const counterEl = document.querySelector('.counter')
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button')
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

const incrementCounter = () => {
  // get current val of counter
  const currentValue = counterValueEl.textContent;
  // convert to num type
  const currentValueAsNumber = +currentValue;
  // const currentValueAsNumber = Number(currentValue);
  // increment by 1
  let newValue = currentValueAsNumber + 1;
  if(newValue > 5) {
    newValue = 5;
    // give visual indicator
    counterEl.classList.add('counter--limit');
    // update counter title
    counterTitleEl.innerHTML = 'LIMIT! Buy <b>Pro</b> for > 5'

    // disable inc dec buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter elm with new value
  counterValueEl.textContent = newValue;  

   // unfocus (blur) reset button
   resetButtonEl.blur();
}

increaseButtonEl.addEventListener('click', incrementCounter)

decreaseButtonEl.addEventListener('click', function () {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = Number(currentValue);
  let newVal = currentValueAsNumber-1;
  if(newVal < 0) {
    newVal = 0;
  }

  counterValueEl.textContent = newVal;
   // unfocus (blur) decrease button
   decreaseButtonEl.blur();
})

resetButtonEl.addEventListener('click', function() {
  counterValueEl.textContent = 0;

  // reset bg color
  counterEl.classList.remove('counter--limit');

  //reset counter title
  counterTitleEl.textContent = 'Fancy Counter';

  // enable inc dec buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur) reset button
  resetButtonEl.blur();
})

document.addEventListener('keydown', incrementCounter)