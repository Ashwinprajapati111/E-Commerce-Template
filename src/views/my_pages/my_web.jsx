import { lazy } from "react";
import { Link } from "react-router-dom";
import '../ass.css';


const Widgets = lazy(() => import("../../components/blog/Widgets"));

const BlogDetailView = () => {
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mb-3">
        <img
          src="../../images/my_pages/web.png"
          className="card-img rounded-0"
          alt="..."
        />

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">


            <div className="display-6 pb-3 mb-1">
              Our Web Services includes
            </div>
            <blockquote className="blockquote bg-secondary p-3 text-white">
              <p>
              "Custom web solutions to enhance your online presence and performance."
              </p>
            </blockquote>

            <div className="row">
              <div className="col-md-6 border-bottom">
                <ul>
                  <li><b>Website Design and Development </b><p>Creating responsive, user-friendly websites.</p></li>
                  <li><b>E-commerce Solutions</b><p> Building online stores with secure payment gateways.</p></li>
                  <li><b>Web Hosting</b><p>Reliable hosting services for fast and secure websites.</p></li>
                  <li><b>SEO Services</b><p>Optimizing websites for search engine visibility.</p></li>
                  <li><b>Content Management Systems (CMS)</b><p>Crafting website banners, icons, and UI/UX elements.</p></li>
                  
                </ul>
              </div>
              <div className="col-md-6 border-bottom">
                <ul>
                 
                  <li><b>Website Maintenance </b><p>Regular updates, backups, and performance monitoring.</p></li>
                  <li><b>Web Application Development</b><p>Custom web-based tools for business needs.</p></li>
                  <li><b>Landing Page Design </b><p> High-conversion pages for marketing campaigns.</p></li>
                  <li><b>Domain Registration </b><p>Securing the perfect web address for your business.</p></li>
                  <li><b>API Integration </b><p>Connecting third-party tools and systems for seamless functionality.</p></li>
                </ul>
              </div>
              <a href="" class="hire center my_center">Hire A Designer<div class="shine"></div></a>

            </div>
          </div>
          <div className="col-md-4">
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailView;
