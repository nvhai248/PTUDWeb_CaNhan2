import jsonFile from "./clonedata.json";
console.log(jsonFile);

function movie(obj) {
  this.id = obj.id;
  this.first_name = obj.first_name;
  this.last_name = obj.last_name;
  this.email = obj.email;
  this.avatar = obj.avatar;

  this.getHTMLforCurrentMovie = function () {
    return `
    <div class="carousel-item active">
    <img src="${this.avatar}" class="d-block w-50 cssForCurrentMovie" alt="${this.id}" />
    <div class="carousel-caption d-none d-md-block">
    <h5>${this.email}</h5>
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
    <img src="${this.avatar}" class="d-block w-100 h-100" alt="${this.id}">
    `;
  };

  this.getHTMLforTopRating = function () {
    return `
    <img src="${this.avatar}" class="d-block w-100 h-100" alt="${this.id}">
    `;
  };

  this.getHTMLforButtonTopRating = function (temp) {
    return `<button type="button" data-bs-target="#targetTopRating" data-bs-slide-to="${temp}" aria-label="Slide ${
      temp + 1
    }"></button>`;
  };
}

var movies = [];

let currentMovie = $(".currentMovie");
let currentMovieButton = $(".currentMovie-button");

// mostPopular
let mostPopular = $(".mostPopular");
let mostPopularButton = $(".mostPopular-button");

// topRating
let topRating = $(".topRating");
let topRatingButton = $(".topRating-button");

async function runAJAX() {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const rs = await res.json();

  for (var i = 0; i < rs.data.length; i++) {
    movies.push(new movie(rs.data[i]));
  }
  //console.log(movies);

  for (var i = 0; i < 5; i++) {
    if (i != 0) {
      currentMovieButton.append(movies[i].getHTMLforButton(i));
    }
    currentMovie.append(movies[i].getHTMLforCurrentMovie());
  }

  for (var i = 1; i <= movies.length / 3; i++) {
    if (i != 1) {
      mostPopularButton.append(movies[i].getHTMLforButton(i - 1));
    }
    mostPopular.append(`
    <div class="carousel-item active">
      <div class="cssForMostPopular">
        ${movies[i * 3 - 3].getHTMLforMostPopular()}
        ${movies[i * 3 - 2].getHTMLforMostPopular()}
        ${movies[i * 3 - 1].getHTMLforMostPopular()}
      </div>
    </div>
    `);
  }

  for (var i = 1; i <= movies.length / 3; i++) {
    if (i != 1) {
      topRatingButton.append(movies[i].getHTMLforButton(i - 1));
    }
    topRating.append(`
    <div class="carousel-item active">
      <div class="cssForMostPopular">
        ${movies[i * 3 - 3].getHTMLforMostPopular()}
        ${movies[i * 3 - 2].getHTMLforMostPopular()}
        ${movies[i * 3 - 1].getHTMLforMostPopular()}
      </div>
    </div>
    `);
  }
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
  //$(this).toggleClass("isCheck");
});
