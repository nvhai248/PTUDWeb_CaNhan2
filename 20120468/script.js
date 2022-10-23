function movie(obj) {
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

  this.getHTMLforCurrentMovie = function () {
    return `
    <div class="carousel-item active">
    <img src="${this.image}" class="d-block w-50 cssForCurrentMovie movie" alt="${this.id}" value="${this.id}" />
    <div class="carousel-caption d-none d-md-block">
    <h5>${this.fullTitle}</h5>
    </div>
    </div>
    `;
  };

  this.getHTMLforButton = function (temp) {
    return `
    <button
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide-to="${temp}"
    aria-label="Slide ${temp + 1}"
    ></button>
    `;
  };

  this.getHTMLforButtonPopular = function (temp) {
    return `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${temp}" aria-label="Slide ${
      temp + 1
    }"></button>`;
  };

  this.getHTMLforMostPopular = function () {
    return `
    <div class="cssForItem hoverItem">
    <img src="${this.image}" class="d-block w-100 h-100 cssForItem movie" alt="${this.id}" value="${this.id}">
    <div class="cssInformationForItem"><h5>${this.fullTitle}</h5></div>
    </div>
    `;
  };

  this.getHTMLforTopRating = function () {
    return `
    <div class="cssForItem hoverItem">
    <img src="${this.image}" class="d-block w-100 h-100 cssForItem movie" alt="${this.id}" value="${this.id}">
    <div class="cssInformationForItem"><h5>${this.fullTitle}</h5></div>
    </div>
    `;
  };

  this.getHTMLforButtonTopRating = function (temp) {
    return `<button type="button" data-bs-target="#targetTopRating" data-bs-slide-to="${temp}" aria-label="Slide ${
      temp + 1
    }"></button>`;
  };

  this.getHTMLCard = function () {
    return `
    <div class="card" style="width: 380px;" value="${this.id}">
      <img src="${this.image}" class="card-img-top movie" alt="${this.id}">
      <div class="card-body">
        <p class="card-text">${this.fullTitle}</p>
      </div>
    </div>
    `;
  };
}

var movies = new Array();
var moviesPopular = new Array();
var moviesTopRating = new Array();

let currentMovie = $(".currentMovie");
let currentMovieButton = $(".currentMovie-button");

// mostPopular
let mostPopular = $(".mostPopular");
let mostPopularButton = $(".mostPopular-button");

// topRating
let topRating = $(".topRating");
let topRatingButton = $(".topRating-button");

// full content
let fullContent = document.getElementById("fullContent");

async function runAJAX() {
  const res = await fetch("https://imdb-api.com/en/API/InTheaters/k_xeisjhjo");
  const rs = await res.json();
  console.log(rs);
  for (var i = 0; i < rs.items.length; i++) {
    movies.push(new movie(rs.items[i]));
  }

  const res1 = await fetch(
    "https://imdb-api.com/en/API/MostPopularMovies/k_xeisjhjo"
  );
  const rs1 = await res1.json();
  console.log(rs1);
  for (var i = 0; i < rs1.items.length; i++) {
    moviesPopular.push(new movie(rs1.items[i]));
  }

  const res2 = await fetch(
    "https://imdb-api.com/en/API/Top250Movies/k_xeisjhjo"
  );
  const rs2 = await res2.json();
  console.log(rs2);
  for (var i = 0; i < rs2.items.length; i++) {
    moviesTopRating.push(new movie(rs2.items[i]));
  }

  for (var i = 0; i < 5; i++) {
    if (i != 0) {
      currentMovieButton.append(movies[i].getHTMLforButton(i));
    }
    currentMovie.append(movies[i].getHTMLforCurrentMovie());
  }

  for (var i = 1; i < 10; i++) {
    if (i != 1) {
      mostPopularButton.append(moviesPopular[i].getHTMLforButtonPopular(i - 1));
    }
    mostPopular.append(`
    <div class="carousel-item active cssForItem">
      <div class="cssForItem grid3-3-3">
        ${moviesPopular[i * 3 - 3].getHTMLforMostPopular()}
        ${moviesPopular[i * 3 - 2].getHTMLforMostPopular()}
        ${moviesPopular[i * 3 - 1].getHTMLforMostPopular()}
      </div>
    </div>
    `);
  }

  for (var i = 1; i < 10; i++) {
    if (i != 1) {
      topRatingButton.append(
        moviesTopRating[i].getHTMLforButtonTopRating(i - 1)
      );
    }
    topRating.append(`
    <div class="carousel-item active cssForItem">
      <div class="cssForItem grid3-3-3">
        ${moviesTopRating[i * 3 - 3].getHTMLforTopRating()}
        ${moviesTopRating[i * 3 - 2].getHTMLforTopRating()}
        ${moviesTopRating[i * 3 - 1].getHTMLforTopRating()}
      </div>
    </div>
    `);
  }
  let currentDisplayContent = fullContent.innerHTML;
  $("#Home").click(function (e) {
    e.preventDefault();
    console.log("a");
    $(".fullContent").removeClass("grid3-3-3");
    fullContent.innerHTML = currentDisplayContent;
    $(".movie").click(function (e) {
      e.preventDefault();
      console.log(this.alt);
    });
  });

  $(".Search").click(function (e) {
    e.preventDefault();

    let HTMLforFullContent = "";
    let temp = document.getElementById("search").value;
    console.log(temp);
    //if (temp == "") return;
    for (var i = 0; i < movies.length; i++) {
      if (
        movies[i].fullTitle.includes(temp) ||
        movies[i].directors.includes(temp)
      ) {
        HTMLforFullContent += movies[i].getHTMLCard();
      }
    }
    $(".fullContent").addClass("grid3-3-3");
    fullContent.innerHTML = HTMLforFullContent;

    $(".movie").click(function (e) {
      e.preventDefault();
      console.log(this.alt);
    });
  });

  $(".movie").click(function (e) {
    e.preventDefault();
    console.log(this.alt);
  });

  console.log(movies);
}
runAJAX();

$("#darkMode").click(function (e) {
  e.preventDefault();
  $(".container").toggleClass("bg-dark");
  $(".alert").toggleClass("bg-dark");
  $(".alert").toggleClass("text-white");
  $(".navbar").toggleClass("bg-dark");
  $(".navbar-brand").toggleClass("text-white");
  $("body").toggleClass("bg-dark");
  $("h1").toggleClass("text-white");
  $(".fullContent").toggleClass("bg-dark");
  //$(this).toggleClass("isCheck");
});
