export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#e3f2fd", color: "light" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Facilities
            </a>
            <a className="nav-link" href="#">
              Bookings
            </a>
            <a className="nav-link" href="#">
              Favorites
            </a>
            <a className="nav-link disabled" aria-disabled="true">
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
