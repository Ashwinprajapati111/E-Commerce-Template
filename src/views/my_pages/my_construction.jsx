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
              Our Services includes
            </div>
            <blockquote className="blockquote bg-secondary p-3 text-white">
              <p>
                "Transforming ideas into impactful visuals that engage and inspire audiences.".
              </p>
            </blockquote>

            <div className="row">
              <div className="col-md-6 border-bottom">
                <ul>
                  <li><b>Logo Design</b><p>Creating unique and memorable brand logos.</p></li>
                  <li><b>Brand Identity</b><p> Developing cohesive visual branding, including color schemes, typography, and style guidelines.</p></li>
                  <li><b>Marketing Materials</b><p>Designing brochures, flyers, posters, and business cards.</p></li>
                  <li><b>Web Graphics</b><p>Crafting website banners, icons, and UI/UX elements.</p></li>
                  
                </ul>
              </div>
              <div className="col-md-6 border-bottom">
                <ul>
                 
                  <li><b>Social Media Graphics</b><p>Custom designs for posts, ads, and headers.</p></li>
                  <li><b>Packaging Design</b><p>Designing product packaging that stands out.</p></li>
                  <li><b>Presentation Design</b><p>Professional PowerPoint or Keynote templates.</p></li>
                  <li><b>Print Design</b><p>High-quality materials for print publications.</p></li>
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
