
// -- GLOBAL SELECTORS--
const MAX_CHARS = 150;
const BASE_API_URL = 'https://bytegrad.com/course-assets/js/1/api';

const textareaEl = document.querySelector('.form__textarea');
const formEl = document.querySelector('.form');
const counterEl = document.querySelector('.counter')
const feedbackListEl = document.querySelector('.feedbacks');
const submitBtnEl = document.querySelector('.submit-btn');
const spinnerEl = document.querySelector('.spinner');
const hashtagListEl = document.querySelector('.hashtags');

const renderFeedbackItem = (feedbackItem)=> {
    // new feedback item HTML
    const feedbackItemHTML = `
    <li class="feedback">
      <button class="upvote">
          <i class="fa-solid fa-caret-up upvote__icon"></i>
          <span class="upvote__count">${feedbackItem.upvoteCount}</span>
      </button>
      <section class="feedback__badge">
          <p class="feedback__letter">${feedbackItem.badgeLetter}</p>
      </section>
      <div class="feedback__content">
          <p class="feedback__company">${feedbackItem.company}</p>
          <p class="feedback__text">${feedbackItem.text}</p>
      </div>
      <p class="feedback__date">${feedbackItem.daysAgo === 0 ? 'NEW' : `${feedbackItem.daysAgo}d`}</p>
    </li>
  `;

  // insert new item in list
  feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHTML);

}


// -- COUNTER COMPONENT --
const inputHandler = ()=> {
  // determine maximum no of chars
  const maxNumChars = MAX_CHARS;
  // determine no of chars currently typed
  const noOfCharsTyped = textareaEl.value.length;

  // calculate no of chars left (max - current)
  const charsLeft = maxNumChars - noOfCharsTyped;
  // console.log(charsLeft)
  counterEl.textContent = charsLeft;
}

textareaEl.addEventListener('input', inputHandler)




// -- FORM COMPONENT --


const showVisualIndicator = (textCheck) =>{

    const className = textCheck === 'valid' ? 'form--valid' : 'form--invalid';
    // show valid indicator
    formEl.classList.add(className);
    
    // remove valid indicator
    setTimeout(()=> {
      formEl.classList.remove(className);
    } , 2000);
};

const submitHandler = (event)=> {
  // prevent default browser action(submitting form data to action address & refreshing page)
  event.preventDefault();

  // console.log(event); // submitevent
  //get text from textarea
  const text = textareaEl.value;

  // validate check #hashtag is present,long enough text
  if (text.includes('#') && text.length >= 5) {
    showVisualIndicator('valid');
  } else {
    // // show invalid indicator
    // formEl.classList.add('form--invalid');
    
    // // remove visual indicator
    // setTimeout(() => {
    //   formEl.classList.remove('form--invalid');
      
    // }, 2000);
    showVisualIndicator('invalid');
    // focus textarea
    textareaEl.focus();

    // stop this function execution
    return;
  }

  // we have text, extract other info 
  const hashtag = text.split(' ').find(word => word.includes('#'));
  const company = hashtag.substring(1);
  const badgeLetter = company.substring(0,1).toUpperCase();
  const upvoteCount = 0;
  const daysAgo = 0;

  // create feedback item object
  const feedbackItem = {
    upvoteCount,
    company,
    badgeLetter,
    daysAgo,
    text
  }
  // render feedback item
  renderFeedbackItem(feedbackItem);

  // send feedback item to server
  fetch(`${BASE_API_URL}/feedbacks`, {
    method: 'POST',
    body: JSON.stringify(feedbackItem),
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
  }).then( response => {
      if (!response.ok) {
        console.log('something went wrong- POST fetch');
        return;
      }

      console.log('Successfully Submitted');
  }).catch(error => console.log(error));

  // clear textarea
  textareaEl.value = '';

  // blur/unfocus submit button
  submitBtnEl.blur();

  //reset counter
  counterEl.textContent = MAX_CHARS;

}

formEl.addEventListener('submit', submitHandler);




// -- FEEDBACK LIST COMPONENT --
const clickHandler = (event) => {
  // get clicked HTML element
  const clickedEl = event.target;

  // determine if user intended to upvote or expand
  const upvoteIntention = clickedEl.className.includes('upvote');
  console.log(upvoteIntention, ' upvoteIntention');
  // run the appropriate logic
  if (upvoteIntention) {
    // get closest upvote button
    const upvoteBtnEl = clickedEl.closest('.upvote');

    // disable upvote button (prevent double-clics, spam)
    upvoteBtnEl.disabled = true;

    // select upvote count ele within upvote button
    // select from existing node
    const upvoteCountEl = upvoteBtnEl.querySelector('.upvote__count')

    // get currently displayed upvote count as number
    let upvoteCount = +upvoteCountEl.textContent;

    // increment by 1
    upvoteCount = upvoteCount + 1;

    //set upvote count
    upvoteBtnEl.textContent = upvoteCount;

  } else {
    // expand the clicked feedback item
    clickedEl.closest('.feedback').classList.toggle('feedback--expand');
  }

}

feedbackListEl.addEventListener('click', clickHandler)

fetch(`${BASE_API_URL}/feedbacks`)
    .then( response => response.json())
    .then( data => {
      
      // remove spinner
      spinnerEl.remove();
      // iterate over each element in feedbacks array & render in list
      data.feedbacks.forEach( feedbackItem => {
          
        renderFeedbackItem(feedbackItem);

      });

    })
    .catch( error => {
        feedbackListEl.textContent = `Failed to fetch feedback items. Error message ${error.message}`;
    });


// -- HASHTAB LIST COMPONENT --

const clickHandler2 = (event) => {
  // get clicked ele
  const clickedEl = event.target;

  // stop function if click happend in List container, but out button
  if (clickedEl.className === 'hashtags') return;
  // if (clickedEl.classList.contains('hashtags')) return;

  // extract company name
  const companyNameFromHashtag = clickedEl.textContent.substring(1).toLowerCase().trim();
  console.log(companyNameFromHashtag, '- companyNameFromHashtag');
  // iterate over each feedback item in the list
  feedbackListEl.childNodes.forEach( childNode => {
    // stop current iteration if it's a text node
    if (childNode.nodeType === 3) return;

    // extract company name
    const companyNameFromFeedbackItem = childNode.querySelector('.feedback__company').textContent.toLowerCase().trim();

    // remove feedback item from list if company names are not equal
    if (companyNameFromHashtag !== companyNameFromFeedbackItem) {
      childNode.remove();
    }
  });

};

hashtagListEl.addEventListener('click', clickHandler2);
