https://youtu.be/aNdwG9BEmOk


//Movie List
const movieList = JSON.parse(localStorage.getItem('movies')) || [];

console.log(movieList);


const formWrapper = document.getElementById('form-wrapper');

// GENERATE ID
const generateID = ()=> {
  return Math.floor(Math.random() * 900000) + 100000;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


// HIDE ERROR
const hideError = ()=> {
  const errorWrapper = document.querySelector('#error');
  errorWrapper.style.display = 'none';
}

//DISPLAY ERROR
const displayError = (errorMessage) => {
  const errorWrapper = document.querySelector('#error');
  const errorParagraph = document.querySelector('#errorParagraph');
  errorWrapper.style.display ='block';
  errorParagraph.innerHTML = errorMessage;
}

// DISPLAY MOVIES
const displayMovies = (filteredMovies = null)=>{
  
  const moviesWrapper = document.querySelector('.bottom-section-wrapper');

  const nomovie = document.getElementById('nomovie');

  let moviesHTML = '';
  
  const star = '<i class="fa fa-star" style="font-size:24px"></i>';

  const moviesToDisplay = filteredMovies ? filteredMovies : movieList;

  moviesToDisplay.forEach( (movie) => {
    moviesHTML += `
    <div class="each-movie-wrapper">
            <div class="movie-left">
              <h3>${movie.movieName}</h3>
              <div class="star-rating-wrapper">
                ${star.repeat(movie.rating)}
              </div>
            </div>
            <div class="movie-right ">
              <div class="movie-right-top ">
                <i onclick="updateMovie('${movie.id}', '${movie.movieGenre}', '${movie.movieName}', '${movie.duration}', '${movie.rating}')" class="fa fa-edit" style="font-size:18px"></i>
                <i onclick="handleDeleteMovie(${movie.id})" class="fa fa-trash" style="font-size:18px"></i>
                <span>${movie.duration}</span>
              </div>
              <div class="movie-right-bottom">${movie.movieGenre}</div>
            </div>
          </div>
    `;
  });


  moviesWrapper.innerHTML = moviesHTML;
  if(moviesToDisplay.length === 0) {
    nomovie.style.display = 'block';
  } else {
    nomovie.style.display = 'none';
  }
}

displayMovies();

// SEARCH FUNCTION  
const searchMovies =(searchQuery)=> {
  const filteredMovies = movieList.filter(movie=>     movie.movieName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredMovies;
};

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', ()=>{
  // searchMovies(searchInput.value.trim())

  displayMovies( searchMovies(searchInput.value.trim()));
})


// FILTER GENRE
const genreSelectInput = document.getElementById('select-movie');

let selectedGenre = '';

genreSelectInput.addEventListener('change', ()=> {
  selectedGenre = genreSelectInput.value;
  console.log('select value' , selectedGenre);

  const filterdMovies = selectedGenre 
    ? movieList.filter( (movie)=> movie.movieGenre.toLowerCase() === selectedGenre.toLocaleLowerCase())
    : movieList;

    console.log(filterdMovies);

    displayMovies(filterdMovies);

});

// DELETE MOVIE 
const handleDeleteMovie = (movieId) => {
  const index = movieList.findIndex(movie => movie.id == movieId);

  console.log(index, movieList[index]);

  if(index === -1){
    return;
  }

  movieList.splice(index, 1);

  localStorage.setItem('movies', JSON.stringify(movieList));

  displayMovies()

}

// UPDATE /EDIT MOVIE

let editMode = null;
let selectedMovieId = null; 

// POPULATE INPUTS WITH MOVIE DETAILS
const populateMovieInputs = (movieName, movieGenre, duration, rating)=> {

  document.getElementById('movie_name').value = movieName;
  document.getElementById('movie_genre').value = movieGenre;
  document.getElementById('rating').value = rating;
  document.getElementById('duration').value = duration;
}

// EMPTY INPUTS
const emptyMovieInputs = ()=> {

  document.getElementById('movie_name').value = '';
  document.getElementById('movie_genre').value = '';
  document.getElementById('rating').value = '';
  document.getElementById('duration').value = '';
}

const updateMovie = (movieId, movieGenre, movieName, duration, rating)=> {
  const index = movieList.findIndex( (movie) => movie.id == movieId);

  console.log(index)

  editMode = true;
  selectedMovieId = movieId;

  populateMovieInputs(movieName, movieGenre, duration, rating);
}


formWrapper.addEventListener("submit", function (e) {
  e.preventDefault();

  const movieName = document.getElementById('movie_name').value;
  const movieGenre = document.getElementById('movie_genre').value;
  const rating = document.getElementById('rating').value;
  const duration = document.getElementById('duration').value;

  console.log(movieName, movieGenre, rating, duration);
  // VALIDATE FORM  

  const validateForm = ()=> {
    // CHECK IF THERE ARE EMPTY INPUTS
    if(!movieGenre || !movieName || !duration || !rating) {
      displayError('All fields are required')
      return false;
    }
    if( rating > 5 || rating < 1) {
      displayError("Rating must be between 1 and 5")
      return false;
    }
    const durationRegEx = /^\d+[hm]$/i;
    if(!durationRegEx.test(duration)) {
      displayError("Duration must be of format 2h or 120m");
      return false;
    } 

    hideError();
    return true;
  };

  if(validateForm()) {
    const newMovie = {
      movieName,
      movieGenre,
      duration,
      rating,
      id: generateID()
      // id: getRandomInt(100000, 900000),
    };

    if(editMode) {
      // UPDATE MOVIE
      const index = movieList.findIndex(movie => movie.id == selectedMovieId)

      // console.log(index);
      movieList[index] = newMovie;
      editMode = false;
    } else {
      
      // CREATE NEW MOVIE
      movieList.push(newMovie);

    }

    localStorage.setItem('movies', JSON.stringify(movieList));
    
    displayMovies(movieList);
    emptyMovieInputs();

    console.log(movieList);
  }

  validateForm();
});

