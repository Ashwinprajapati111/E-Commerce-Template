import { lazy } from "react";
import { Link } from "react-router-dom";
import '../ass.css';


const Widgets = lazy(() => import("../../components/blog/Widgets"));

const BlogDetailView = () => {
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mb-3">
        <img
          src="../../images/my_pages/printing.png"
          className="card-img rounded-0"
          alt="..."
        />

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">


            <div className="display-6 pb-3 mb-1">
              Our Printing Services includes
            </div>
            <blockquote className="blockquote bg-secondary p-3 text-white">
              <p>
              "High-quality printing solutions for businesses, events, and personal projects."
              </p>
            </blockquote>

            <div className="row">
              <div className="col-md-6 border-bottom">
                <ul>
                  <li><b>Business Cards</b><p>High-quality cards with custom designs.</p></li>
                  <li><b>Flyers and Brochures</b><p> Professionally printed marketing materials.</p></li>
                  <li><b>Posters and Banners</b><p>Large-format prints for events or promotions.</p></li>
                  <li><b>Stickers and Labels</b><p>Personalized designs for branding or packaging.</p></li>
                  <li><b>Signage Printing</b><p>Indoor and outdoor signs for businesses or events.</p></li>
                  
                </ul>
              </div>
              <div className="col-md-6 border-bottom">
                <ul>
                 
                  <li><b>Promotional Materials</b><p>T-shirts, mugs, and other branded items.</p></li>
                  <li><b>Invitations and Greeting Cards</b><p>Unique prints for personal or corporate events.</p></li>
                  <li><b>Packaging Printing</b><p>Custom boxes, wraps, or bags.</p></li>
                  <li><b>Booklets and Catalogs</b><p>Professionally bound, vibrant prints.</p></li>
                  <li><b>Photo Printing</b><p>High-resolution prints for personal or commercial use.</p></li>
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
