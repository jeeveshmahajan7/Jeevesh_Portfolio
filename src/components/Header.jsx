const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">
        <a className="navbar-brand text-light" href="#hero">
          Jeevesh Mahajan
        </a>

        {/* Mobile Menu Button */}
        <div className="d-lg-none dropdown">
          <button
            className="btn text-light"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end p-3 nav-dropdown">
            <li>
              <a className="dropdown-item" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#tech-stack">
                Tech Stack
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#connect">
                Connect
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tech-stack">
                Tech Stack
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#connect">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
