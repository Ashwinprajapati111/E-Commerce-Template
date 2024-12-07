import { lazy } from "react";
import { Link } from "react-router-dom";
import '../ass.css';


const Widgets = lazy(() => import("../../components/blog/Widgets"));

const BlogDetailView = () => {
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mb-3">
        <img
          src="../../images/my_pages/construction.png"
          className="card-img rounded-0"
          alt="..."
        />

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">


            <div className="display-6 pb-3 mb-1">
            construction services
            </div>
            <blockquote className="blockquote bg-secondary p-3 text-white">
              <p>
              "Quality construction services delivering durable solutions for residential and commercial projects."
              </p>
            </blockquote>

            <div className="row">
              <div className="col-md-6 border-bottom">
                <ul>
                  <li><b>Residential Construction</b><p>Building custom homes, renovations, and additions.</p></li>
                  <li><b>Commercial Construction</b><p>  Developing offices, retail spaces, and industrial buildings.</p></li>
                  <li><b>General Contracting</b><p>Overseeing and managing all phases of construction projects.</p></li>
                  <li><b>Renovation and Remodeling</b><p>Transforming existing spaces with updated designs and functionality.</p></li>
                  <li><b>Interior Fit-Outs</b><p>Customizing interiors for homes or businesses.</p></li>
                  
                </ul>
              </div>
              <div className="col-md-6 border-bottom">
                <ul>
                 
                  <li><b>Site Preparation</b><p> Clearing, grading, and preparing land for construction.</p></li>
                  <li><b>Structural Repairs</b><p>Restoring and reinforcing damaged structures.</p></li>
                  <li><b>Green Building</b><p>Eco-friendly construction with sustainable materials and energy-efficient solutions.</p></li>
                  <li><b>Project Management</b><p> Ensuring timely and cost-effective completion of construction projects.</p></li>
                  <li><b>Concrete and Masonry Work</b><p>Foundations, walls, and specialized stonework.</p></li>
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
