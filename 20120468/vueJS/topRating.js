export default {
  data() {
    return {};
  },
  template: `
      <h1>Top Rating</h1>
        <div id="targetTopRating" class="carousel slide" data-bs-ride="true" style="height: 400px;">
            <div class="carousel-indicators topRating-button">
            <button type="button" data-bs-target="#targetTopRating" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            </div>
            <div class="carousel-inner topRating">

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#targetTopRating" data-bs-slide="prev" style="left: -5%;">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#targetTopRating" data-bs-slide="next" style="left: 90%;">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
      `,
};
