export default {
  data() {
    return {};
  },
  template: `
    <nav class="navbar bg-light">
        <div class="container-fluid">
        <a class="navbar-brand">Home</a>
        <div class="d-flex" role="search">
            <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
            Search
            </button>
        </div>
        </div>
    </nav>
    `,
};
