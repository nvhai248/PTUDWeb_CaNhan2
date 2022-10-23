import Movie from "./movie.js";

export default {
  data() {
    return {
      movies: [],
    };
  },

  methods: {
    async load() {
      parseInt();
      const res = await fetch("https://reqres.in/api/users?page=2");
      const rs = await res.json();

      this.movies = rs.data.map((obj) => new Movie(obj));
      console.log(this.movies);
    },
  },

  template: `
        <h1>Most Popular</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" style="height: 320px;">
            <div class="carousel-indicators mostPopular-button">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            </div>
            <div class="carousel-inner mostPopular">

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style="left: -5%;">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style="left: 90%;">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
      `,
};
