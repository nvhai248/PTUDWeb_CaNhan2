import Movie from "./movie.js";

export default {
  data() {
    return {
      movies: [],
    };
  },

  methods: {
    async load() {
      const res = await fetch(
        "https://imdb-api.com/en/API/InTheaters/k_b6v1rgho"
      );
      const rs = await res.json();
      for (var i = 0; i < 5; i++) {
        this.movies.append(new Movie(rs.items[i]));
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
        <div class="carousel-indicators">
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
        ></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" v-for="m in movies">
                <img :src="m.image" class="d-block w-100" :alt="m.id" />
                <div class="carousel-caption d-none d-md-block">
                <h5>{{m.fullTitle}}</h5>
                </div>
            </div>
        </div>
        <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        @click="load"
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
