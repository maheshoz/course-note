import {
  state,
  paginationEl,
  paginationBtnNextEl,
  paginationBtnBackEl,
  paginationNumberBackEl,
  paginationNumberNextEl,
  RESULTS_PER_PAGE
  
} from '../common.js'
import renderJobList from './JobList.js'


const renderPaginationButtons = ()=> {
  // dispaly back btn if we are on page 2 or further
  if (state.currentPage >= 2 ) {
    paginationBtnBackEl.classList.remove('pagination__button--hidden');
  } else {
    paginationBtnBackEl.classList.add('pagination__button--hidden');

  }

  // display next btn if there are more job items on next page
  if ( (state.searchJobItems.length - state.currentPage * RESULTS_PER_PAGE) <= 0 ) {
    paginationBtnNextEl.classList.add('pagination__button--hidden');
  } else {
    paginationBtnNextEl.classList.remove('pagination__button--hidden');
  }
  // update page numbers
  paginationNumberNextEl.textContent = state.currentPage + 1;
  paginationNumberBackEl.textContent = state.currentPage - 1;

  // unfocus (blur) buttons
  paginationBtnNextEl.blur();
  paginationBtnBackEl.blur();
}

const clickHandler = event => {
  // get clicked ele
  const clickedButtonEl = event.target.closest('.pagination__button');

  // stop function if null
  if (!clickedButtonEl) return;

  // check if intention is next or back
  const nextPage = clickedButtonEl.className.includes('--next') ? true : false;

  // update state
  nextPage ? state.currentPage++ : state.currentPage--;

  // render pagination btns
  renderPaginationButtons();

  // render job items for that page
  renderJobList();

}

paginationEl.addEventListener('click', clickHandler);

export default renderPaginationButtons;