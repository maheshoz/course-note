import { jobDetailsContentEl,
  BASE_API_URL,
  getData  ,
  state
} from "../common.js";
import renderSpinner from "./Spinner.js";
import renderJobDetails from "./JobDetails.js";
import renderError from "./Error.js";
import renderJobList from "./JobList.js";


const loadHashChangeHandler = async ()=> {
  // get id form url
  const id = window.location.hash.substring(1);
  console.log('url hash id value ', id);

  if(id) {
    // remove the active class from previously active job items
    document.querySelectorAll('.job-item--active').forEach(jobItemWithActiveClass => jobItemWithActiveClass.classList.remove('job-item--active'));

    // remove previous job details content
    jobDetailsContentEl.innerHTML = '';

    // add spinner
    renderSpinner('job-details');

    // fetch job item data
    try {

      const data = await getData(`${BASE_API_URL}/jobs/${id}`);
  
      // extract job item
      const { jobItem } = data;
      console.log('id data ', jobItem);
      
      //update state
      state.activeJobItem = jobItem;

      // render search job list
      renderJobList();
      // remove spinner
      renderSpinner('job-details');
  
      // render job details
      renderJobDetails(jobItem);
  } catch (error) {
      renderSpinner('job-details');
      renderError(error.message);
  }
  }
}
window.addEventListener('DOMContentLoaded', loadHashChangeHandler);
window.addEventListener('hashchange', loadHashChangeHandler);

// window is the global object
// window.history, .fetch, .console , widow.setTimeout