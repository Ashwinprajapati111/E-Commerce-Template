import { lazy } from "react";
import { Link } from "react-router-dom";
import '../ass.css';


const Widgets = lazy(() => import("../../components/blog/Widgets"));

const BlogDetailView = () => {
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mb-3">
        <img
          src="../../images/my_pages/gents.png"
          className="card-img rounded-0"
          alt="..."
        />

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">


            <div className="display-6 pb-3 mb-1">
            Gents Tailor Services
            </div>
            <blockquote className="blockquote bg-secondary p-3 text-white">
              <p>
              "Expert tailoring services delivering perfect fits for every occasion."
              </p>
            </blockquote>

            <div className="row">
              <div className="col-md-6 border-bottom">
                <ul>
                  <li><b>Custom Suit Tailoring</b><p>Bespoke suits crafted to perfection.</p></li>
                  <li><b>Shirt Stitching</b><p> Made-to-measure shirts for formal and casual wear.</p></li>
                  <li><b>Trouser and Pant Tailoring</b><p>Tailored bottoms for a precise fit.</p></li>
                  <li><b>Alteration Services </b><p>Adjusting garments for comfort and style.</p></li>
                  <li><b>Wedding Attire</b><p>Custom sherwanis, suits, and tuxedos for special occasions.</p></li>
                  
                </ul>
              </div>
              <div className="col-md-6 border-bottom">
                <ul>
                 
                  <li><b>Ethnic Wear</b><p>Tailoring kurta-pajamas, waistcoats, and traditional outfits.</p></li>
                  <li><b>Blazer and Jacket Tailoring</b><p>Stylish outerwear with perfect measurements.</p></li>
                  <li><b>Overcoat and Formal Wear </b><p>Custom long coats and evening wear.</p></li>
                  <li><b>Corporate Wear</b><p>Tailored uniforms and office attire.</p></li>
                  <li><b>Fabric Selection Guidance </b><p> Expert advice on choosing the right material.</p></li>
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
