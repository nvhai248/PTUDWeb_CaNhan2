import voH from "./header.js";
import voF from "./footer.js";
import voN from "./nav.js";
import voC from "./content.js";

export default {
  data() {
    return {};
  },

  components: {
    voH,
    voF,
    voN,
    voC,
  },

  template: `
    <div class="row">
        <voH/>
    </div>
    <div class="row">
        <voN/>
    </div>
        
    <div class="row">
        <voC/>
    </div>

    <div class="row">
        <voF/>
    </div>
      `,
};
