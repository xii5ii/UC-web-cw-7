// create an object

let movie1 = {
  name: "Harry Potter",
  src: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
};

let movie2 = {
  name: "The Hunger Game",
  src: "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_.jpg",
};

let movie3 = {
  name: "A Silent Voice",
  src: "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
};

let movies = [];

movies.push(movie1, movie2, movie3);

let movieContainer = document.getElementById("container");

movies.forEach((movie) => {
  movieContainer.innerHTML += `
    <div class="movie">
    <img src="${movie.src}" alt="movie picture" />
    <h2>${movie.name}</h2>
    </div>
    `;
});
