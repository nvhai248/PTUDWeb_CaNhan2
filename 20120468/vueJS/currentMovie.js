import Movie from "./movie.js";

export default {
  data() {
    return {
      movies: [],
    };
  },

  methods: {
    async load() {
      const res = await fetch("https://reqres.in/api/users?page=2");
      const rs = await res.json();

      for (var i = 0; i < 5; i++) {
        this.movies.push(new Movie(rs.data[i]));
      }
      console.log(this.movies);
    },
  },

  template: `
        <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
        style="height: 800px; margin-top: 10px"
        >
        <div class="carousel-indicators currentMovie-button">
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
        ></button>

        </div>
        <div class="carousel-inner currentMovie">
            
        </div>

        <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
        </div>
      `,
};
