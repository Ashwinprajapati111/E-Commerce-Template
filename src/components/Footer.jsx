import { Link } from "react-router-dom";
import './as.css';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid my_bg-1">
        <div className="row ">
          <div className="col-md-9 py-3 text-white">
            Get connected with us on social networks!
          </div>
          <div className="col-md-3 py-3 text-center text-white">
            <Link to="https://w.app/qz3H2v" title="Youtube">
              <i className="fa fa-whatsapp me-3"></i>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100020534021762" title="Facebook">
              <i className="bi bi-facebook text-light me-3"></i>
            </Link>
            <Link to="https://www.instagram.com/ashvin.avp111/" title="Instagram">
              <i className="bi bi-instagram text-light me-3"></i>
            </Link>
            <Link to="https://www.youtube.com/watch?v=WhswAhJii7g" title="Youtube">
              <i className="bi bi-youtube text-light me-3"></i>
            </Link>

          </div>
        </div>
      </div>
      <div className="container-fluid text-white my_bg">
        <div className="row ">
          <div className="col-md-3 py-3">
            <div className="h6">Shree Vachanamrut</div>
            <hr />
            <p className="justi">
              Our work stands out with vibrant colors, sharp details, and a sleek, polished finish that captures attention and makes an impact. Each project is tailored to be unique, combining professional expertise with artistic vision to deliver stunning, high-quality results. Materials are durable, crisp, and built a lasting impression. We bring your ideas to life in captivating and memorable ways.
            </p>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Products</div>
            <hr />
            <ul className="list-group list-group-flush list-group">
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Printed Tshirts
                </Link>
              </li>
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Business Cards
                </Link>
              </li>
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Non-vowen Bags
                </Link>
              </li>
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Invitation Cards
                </Link>
              </li>
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Banner / Flyer
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Services</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Custom Business Website
                </Link>
              </li>
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Social Media Advertising
                </Link>
              </li>
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Wholesale Print Program
                </Link>
              </li>
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Video Editing
                </Link>
              </li>
              <li className="list-group-item my_bg text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Product Design
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Address</div>
            <hr />
            <address>
              <strong>Head Office.</strong>
              <br />
              Shop 3 AB Tower, Shreeji Gold Complex
              <br />
              Opp.Sona Party Plot
              <br />
              Laxmipura, Vadodara
              <br />
              <abbr>P :</abbr> +91 8511199317
            </address>
            <div className="h6">Customer Care</div>
            <hr />

            <i className="bi bi-envelope"></i> info@shreevachanamrut.com
          </div>
        </div>
      </div>
      <div className="container-fluid text-white ftbottom">
        <div className="row ">
          <div className="col-md-3 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-briefcase text-warning"></i> Partner with us
            </Link>
          </div>
          <div className="col-md-3 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-badge-ad text-info"></i> Advertise
            </Link>
          </div>
          <div className="col-md-3 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-gift"></i> Gift
            </Link>
          </div>
          <div className="col-md-3 py-2">
            © Shree Vachanamrut Arts & Creation
          </div>


        </div>
      </div>
    </footer>
  );
};
export default Footer;
