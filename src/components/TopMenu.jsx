import { Link } from "react-router-dom";
import './as.css';

const TopMenu = () => {
  const menn = [
    {
      menu_name: "About Us",
      menu_link: "/category",
    },
    {
      menu_name: "Our Productcs",
      menu_link: "/products",
    },
    
    {
      menu_name: "Stationaries",
      menu_link: "/category",
    },

  ];


  return (
    <nav className="navbar navbar-expand-lg navbar-dark my_bg p-0 ">
      <div className="my_nav">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                Our Services
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/graphic_designing">
                    Graphics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/printing">
                    Printing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/video">
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/web">
                    Web Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/social">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tshirt">
                    Tshirt Printing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gents">
                    Gents Tailor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/construction">
                    Construction Consultant
                  </Link>
                </li>
              </ul>
            </li>
            {menn.map((menuu) => {
              return (
                <li className="nav-item">
                  <Link className="nav-link" to={menuu.menu_link}>
                    {menuu.menu_name}
                  </Link>
                </li>
              )
            })

            }


            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                All Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/account/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/signup">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    Checkout Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog/detail">
                    Blog Detail
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/fsafasf">
                    404 Page Not Found
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/500">
                    500 Internal Server Error
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
