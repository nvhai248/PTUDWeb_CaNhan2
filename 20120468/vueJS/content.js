import voCur from "./currentMovie.js";
import voMost from "./mostPopular.js";
import voTop from "./topRating.js";

export default {
  data() {
    return {};
  },
  components: {
    voCur,
    voMost,
    voTop,
  },
  template: `
    <div class="row">
        <voCur/>
    </div>
    <div class="row">
        <voMost/>
    </div>
    <div class="row">
        <voTop/>
    </div>
      `,
};
