export default {
  data() {
    return {};
  },
  template: `
    <nav class="navbar bg-light Home">
        <div class="container-fluid">
        <a class="navbar-brand" id="Home">Home</a>
        <div class="d-flex" role="search">
            <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search"
            />
            <button class="btn btn-outline-success Search">
            Search
            </button>
        </div>
        </div>
    </nav>
    `,
};
