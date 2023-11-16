import {
 
  sortingEl,
  sortingBtnRecentEl,
  sortingBtnRelevantEl
} from '../common.js';
import renderJobList from './JobList.js';


const clickHandler = event => {
  // get clicked btn ele
  console.log(event.target);
  const clickedButtonEl = event.target.closest('.sorting__button');
  console.log('clickedButton', clickedButtonEl);

  // stop if not clicked on btn element
  if (!clickedButtonEl) return;

  // check if intention is recent or relevant sorting
  const recent = clickedButtonEl.className.includes('--recent') ? true : false;

  // sort job items
  if (recent) {
    
  } else {

  }
}

sortingEl.addEventListener('click', clickHandler);