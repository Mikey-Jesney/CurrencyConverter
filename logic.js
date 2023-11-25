async function logMovies() {
    console.log("working...")
    const response = await fetch("http://api.coinlayer.com/api/live.json");
    const movies = await response.json();
    console.log(movies);
  }


