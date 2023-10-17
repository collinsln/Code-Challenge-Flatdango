let url = 'https://api.npoint.io/f8d1be198a18712d3f29/films/'
const listHolder = document.getElementById('films')

function fetchMovies(url){
    fetch(url)
    .then(response => response.json())
    .then(movies => {
        console.log(movies)
        });
    }
