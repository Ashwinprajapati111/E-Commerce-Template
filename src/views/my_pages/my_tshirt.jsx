import { lazy } from "react";
import { Link } from "react-router-dom";
import '../ass.css';


const Widgets = lazy(() => import("../../components/blog/Widgets"));

const BlogDetailView = () => {
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mb-3">
        <img
          src="../../images/my_pages/tshirt.png"
          className="card-img rounded-0"
          alt="..."
        />

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">


            <div className="display-6 pb-3 mb-1">
            T-Shirt Printing Services
            </div>
            <blockquote className="blockquote bg-secondary p-3 text-white">
              <p>
              "Custom t-shirt printing to showcase your style or brand identity."
              </p>
            </blockquote>

            <div className="row">
              <div className="col-md-6 border-bottom">
                <ul>
                  <li><b>Custom Design Printing</b><p>Personalized t-shirts with unique graphics or text.</p></li>
                  <li><b>Screen Printing</b><p>Durable and vibrant designs for bulk orders.</p></li>
                  <li><b>Direct-to-Garment (DTG) Printing </b><p>High-quality prints for detailed designs.</p></li>
                  <li><b>Embroidery</b><p>Professional stitched designs for logos and patterns.</p></li>
                  <li><b>Heat Transfer Printing </b><p>Flexible printing for small batches or custom artwork.</p></li>
                  
                </ul>
              </div>
              <div className="col-md-6 border-bottom">
                <ul>
                 
                  <li><b>Sublimation Printing</b><p>All-over printing with vibrant, long-lasting colors.</p></li>
                  <li><b>Team Apparel</b><p>Custom t-shirts for sports teams, clubs, or organizations.</p></li>
                  <li><b>Corporate T-Shirts</b><p>Branded shirts for employees, events, or giveaways.</p></li>
                  <li><b>Event Merchandise </b><p>Printed t-shirts for concerts, fundraisers, or trade shows.</p></li>
                  <li><b>Eco-Friendly Printing</b><p>Sustainable options with organic materials and water-based inks.</p></li>
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
