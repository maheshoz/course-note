import {
  BASE_API_URL,
  jobListSearchEl,
  jobDetailsContentEl,
  getData,
  state,
  RESULTS_PER_PAGE,
  jobListBookmarksEl
} from '../common.js';
import renderJobDetails from './JobDetails.js';
import renderSpinner from './Spinner.js';
import renderError from './Error.js';

const renderJobList = (whichJobList = 'search') => {
    // determine correct selector for job list (search results list or bookmarks list)
    const jobListEl = whichJobList === 'search' ? jobListSearchEl : jobListBookmarksEl;
    // remove previous job items
    // jobListSearchEl.innerHTML = '';
    jobListEl.innerHTML = '';

    // determine the job items that should be rendered
    let jobItems;
    if (whichJobList === 'search') {
        jobItems = state.searchJobItems.slice( (state.currentPage * RESULTS_PER_PAGE) - RESULTS_PER_PAGE , state.currentPage * RESULTS_PER_PAGE);
    } else if (whichJobList === 'bookmarks') {
        jobItems = state.bookmarkJobItems;
    }
     // render job items in search job list
     jobItems.forEach(jobItem => {
        const newJobItemHTML = `
        <li class="job-item ${state.activeJobItem.id === jobItem.id ? 'job-item--active' : ''}">
          <a class="job-item__link" href="${jobItem.id}">
              <div class="job-item__badge">${jobItem.badgeLetters}</div>
              <div class="job-item__middle">
                  <h3 class="third-heading">${jobItem.title}</h3>
                  <p class="job-item__company">${jobItem.company}</p>
                  <div class="job-item__extras">
                      <p class="job-item__extra"><i class="fa-solid fa-clock job-item__extra-icon"></i> ${jobItem.duration}</p>
                      <p class="job-item__extra"><i class="fa-solid fa-money-bill job-item__extra-icon"></i> ${jobItem.salary}</p>
                      <p class="job-item__extra"><i class="fa-solid fa-location-dot job-item__extra-icon"></i> ${jobItem.location}</p>
                  </div>
              </div>
              <div class="job-item__right">
                  <i class="fa-solid fa-bookmark job-item__bookmark-icon ${state.bookmarkJobItems.some(bookmarkJobItem => bookmarkJobItem.id === jobItem.id) && 'job-item__bookmark-icon--bookmarked'}"></i>
                  <time class="job-item__time">${jobItem.daysAgo}</time>
              </div>
          </a>
        </li>
        `;
        jobListEl.insertAdjacentHTML('beforeend', newJobItemHTML);
    })
}


const clickHandler = async (e)=> {
  e.preventDefault();

  //get clicked item
  const jobItemEl = e.target.closest('.job-item');
  console.log("job item clicked", jobItemEl);
  // const t = jobItemEl.querySelector('.third-heading').textContent
  // console.log(t);

  // remove the active class from previously active job item
  // const activeJobItemEL = document.querySelector('.job-item--active');
  // if (activeJobItemEL) {
  //   activeJobItemEL.classList.remove('job-item--active');
  // }

  // document.querySelector('.job-item--active') && document.querySelector('.job-item--active').classList.remove('job-item--active');
  // optional chaining, same as above
  document.querySelectorAll('.job-item--active').forEach(jobItemWithActiveClass => jobItemWithActiveClass.classList.remove('job-item--active'));
  // add active class
//   jobItemEl.classList.add('job-item--active');

  // empty the job details section
  jobDetailsContentEl.innerHTML = '';

  // render spinner
  // spinnerJobDetailsEl.classList.add('spinner--visible');
  renderSpinner('job-details');

  // get the id
  const id = jobItemEl.children[0].getAttribute('href');
  // jobItemEl.querySelector('.job-item__link').getAttribute('href')

  // update state 
  const allJobItems = [...state.searchJobItems, ...state.bookmarkJobItems];
  state.activeJobItem = allJobItems.find(jobItem => jobItem.id === +id);
  console.log('active job item ', state.activeJobItem);

  // render search job list
  renderJobList();
  // add id to url
  history.pushState(null, '', `/#${id}`) // will be added after the root path
//   history.pushState(null, '', `js-byteGrad/5-rmtDev/#${id}`)
  
    
    // fetch job item data
    try {
        // const response = await fetch(`${BASE_API_URL}/jobs/${id}`);
        // const data = await response.json();

        // if (!response.ok) { // 4xx, 5xx status code
        //     throw new Error(data.description);
        // }
        const data = await getData(`${BASE_API_URL}/jobs/${id}`);
    
        // extract job item
        const { jobItem } = data;
    
        // remove spinner
        renderSpinner('job-details');
    
        // render job details
        renderJobDetails(jobItem);
    } catch (error) {
        renderSpinner('job-details');
        renderError(error.message);
    }



//   fetch(`${BASE_API_URL}/jobs/${id}`)
//     .then( response => {
//         if(!response.ok) {  //4xx, 5xx status code
            
//             // using default Error obj
//             throw new Error("Resouce issue (e.g. resource doesn't exist or server issue");
//             // return; // unreachable code
//         }

//       return response.json();
//     })
//     .then(data => {
//       // console.log(data)
//       //extract job item
//       const {jobItem} = data;

//       // remove spinner
//       // spinnerJobDetailsEl.classList.remove('spinner--visible');
//       renderSpinner('job-details');

//       // render job details
//         renderJobDetails(jobItem);
//     })
//     .catch( error => { //network problem or other errors (e.g. tryin to parse someting not JSON as json)
//         // console.log(error)
//         renderSpinner('search');
//         renderError(error.message);
//       });

}
jobListSearchEl.addEventListener('click', clickHandler);
jobListBookmarksEl.addEventListener('click', clickHandler);

export default renderJobList;