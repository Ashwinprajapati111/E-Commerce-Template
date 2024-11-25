import { lazy } from "react";
import { Link } from "react-router-dom";
import '../ass.css';


const Widgets = lazy(() => import("../../components/blog/Widgets"));

const BlogDetailView = () => {
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mb-3">
        <img
          src="../../images/my_pages/video.png"
          className="card-img rounded-0"
          alt="..."
        />

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">


            <div className="display-6 pb-3 mb-1">
              Our Video Services includes
            </div>
            <blockquote className="blockquote bg-secondary p-3 text-white">
              <p>
              "Professional video production tailored to captivate and engage your audience."
              </p>
            </blockquote>

            <div className="row">
              <div className="col-md-6 border-bottom">
                <ul>
                  <li><b>Corporate Videos</b><p>Engaging company profiles, training videos, and testimonials.</p></li>
                  <li><b>Promotional Videos</b><p> Content for marketing campaigns, product launches, or advertisements.</p></li>
                  <li><b>Event Coverage</b><p>Capturing live events, conferences, and special occasions.</p></li>
                  <li><b>Social Media Videos</b><p>Short, impactful videos optimized for platforms like Instagram, TikTok, and YouTube.</p></li>
                  <li><b>Explainer Videos</b><p>Animated or live-action videos to simplify complex ideas.</p></li>
                  
                </ul>
              </div>
              <div className="col-md-6 border-bottom">
                <ul>
                 
                  <li><b>Documentaries</b><p>Story-driven videos for personal or organizational projects.</p></li>
                  <li><b>Music Videos </b><p>Creative visuals for artists and bands.</p></li>
                  <li><b>Video Editing</b><p>Professional post-production for existing footage.</p></li>
                  <li><b>Training and eLearning Videos</b><p> Educational content for staff or online courses.</p></li>
                  <li><b>Drone Videography</b><p>Stunning aerial footage for unique perspectives.</p></li>
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
