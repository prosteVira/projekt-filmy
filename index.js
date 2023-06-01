/* tady bude tvůj kód */
console.log('JavaScript ve stránce funguje');

const showMovies = (movies) => {
    const movieList = document.querySelector("#movies");
    movies.forEach((movie) => {
const movieHTML = `
<div class="movie">
          <img class="movie__img" src="${movie.posterUrl}" alt="${movie.title}">
          <h2 class="movie__title">${movie.title}</h2>
          <p class="movie__year">${movie.year}</p>
          <p class="movie__genre">${movie.genres.join(', ')}</p>
        </div>`
   movieList.innerHTML += movieHTML
});

}

const downloadMovies = async () => {
    const resp = await fetch("https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies");
    const movies = await resp.json();
    showMovies(movies);
};

downloadMovies();