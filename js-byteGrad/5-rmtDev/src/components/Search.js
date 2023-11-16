import {
  BASE_API_URL,
  searchInputEl,
  searchFormEl,
  jobListSearchEl,
  numberEl,
  getData,
  state
} from '../common.js';
import renderError from './Error.js';
import renderSpinner from './Spinner.js';
import renderJobList from './JobList.js';

const submitHandler = async event => {
  event.preventDefault();

  const searchText = searchInputEl.value;
  
  // validation regex
  const forbiddenPattern = /[0-9]/;
  const patternMatch = forbiddenPattern.test(searchText)
  if (patternMatch) {
    renderError('Your search may contain numbers');
    return;
  }

  // blur input
  searchInputEl.blur();

  // remove previous job items
  jobListSearchEl.innerHTML = '';

  // render spinner
  // spinnerSearchEl.classList.add('spinner--visible');
  renderSpinner('search');

  // fetch search results
  try {
    // const response = await fetch(`${BASE_API_URL}/jobs?search=${searchText}`);
    // const data = await response.json();

    // if(!response.ok) {
    //   // throw new Error("Resouce issue (e.g. resource doesn't exist or server issue");
    //   throw new Error(data.description);
    // }

    const data  = await getData(`${BASE_API_URL}/jobs?search=${searchText}`);
    
    // extract job items
    const { jobItems } = data;

    //update state
    state.searchJobItems = jobItems

    //remove spinner
    renderSpinner('search');
  
    // render number of results
    numberEl.textContent = jobItems.length;
  
    // render job items in search job list
    renderJobList(jobItems);
    // renderJobList();
    
  }catch (error) {
    renderSpinner('search');
    renderError(error.message);
  }


  // fetch(`${BASE_API_URL}/jobs?search=${searchText}`)
  //   .then( response => {
  //     if(!response.ok) {  //4xx, 5xx status code
  //         // console.log('something went wrong in fetch');
  //         // throw {
  //         //   message : "Resouce issue (e.g. resource doesn't exist or server issue",
  //         //   name: 'Error'
  //         // };
  //         // using default Error obj
  //         throw new Error("Resouce issue (e.g. resource doesn't exist or server issue");
  //         // return; // unreachable code
  //     }

  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
      
  //     // extract job items
  //     const { jobItems } = data;
  //     // console.log(jobItems);
  //     //remove spinner
  //     // spinnerSearchEl.classList.remove('spinner--visible');
  //     renderSpinner('search');

  //     // render number of results
  //     numberEl.textContent = jobItems.length;

  //     // render job items in search job list
  //     renderJobList(jobItems);
  //   })
  //   .catch( error => { //network problem or other errors (e.g. tryin to parse someting not JSON as json)
  //     // console.log(error)
  //     renderSpinner('search');
  //     renderError(error.message);
  //   });
}

searchFormEl.addEventListener('submit', submitHandler);

