Movie = function (obj) {
  // this.directorList = obj.directorList;
  this.directors = obj.directors;
  this.fullTitle = obj.fullTitle;
  //this.genreList = obj.genreList;
  this.genre = obj.genre;
  this.id = obj.id;
  this.imDbRating = obj.imDbRating;
  this.imDbRatingCount = obj.imDbRatingCount;
  this.image = obj.image;
  this.metacriticRating = obj.metacriticRating;
  this.plot = obj.plot;
  this.releaseState = obj.releaseState;
  this.runtimeMins = obj.runtimeMins;
  this.runtimeStr = obj.runtimeStr;
  //this.starList = obj.starList;
  this.stars = obj.stars;
  this.title = obj.title;
  this.year = obj.year;
};

movies = [];

async function runAJAX() {
  const res = await fetch("https://imdb-api.com/en/API/InTheaters/k_b6v1rgho");
  const rs = await res.json();
  console.log(rs.items);

  /* for (var i = 0; i < 5; i++) {
    movies.append(new Movie(rs.items[i]));
  }
  console.log(movies); */
}

runAJAX();

$("#darkMode").click(function (e) { 
    e.preventDefault();
    $('.container').toggleClass("bg-dark");
    $('.alert').toggleClass("bg-dark");
    $('.alert').toggleClass("text-white");
    $('.navbar').toggleClass("bg-dark");
    $('.navbar-brand').toggleClass("text-white");
    $('body').toggleClass("bg-dark");
    $('h1').toggleClass("text-white");
    $(this).toggleClass("isCheck");
});
