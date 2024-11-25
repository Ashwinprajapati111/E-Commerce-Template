import { Link } from "react-router-dom";
import './as.css';

const TopMenu = () => {
  const menn = [
    {
      menu_name: "About Us",
      menu_link: "/category",
    },
    {
      menu_name: "Graphics & Web Designing",
      menu_link: "/category",
    },
    {
      menu_name: "Corporate Gifts",
      menu_link: "/category",
    },
    {
      menu_name: "Albums",
      menu_link: "/category",
    },
    {
      menu_name: "Label & Packaging",
      menu_link: "/category",
    },
    {
      menu_name: "Photo Gifts",
      menu_link: "/category",
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
