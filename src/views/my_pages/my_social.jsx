import { lazy } from "react";
import { Link } from "react-router-dom";
import '../ass.css';


const Widgets = lazy(() => import("../../components/blog/Widgets"));

const BlogDetailView = () => {
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mb-3">
        <img
          src="../../images/my_pages/social.png"
          className="card-img rounded-0"
          alt="..."
        />

      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">


            <div className="display-6 pb-3 mb-1">
              Our Social Media Advertisement includes
            </div>
            <blockquote className="blockquote bg-secondary p-3 text-white">
              <p>
              "Targeted social media ads to grow engagement and drive results."
              </p>
            </blockquote>

            <div className="row">
              <div className="col-md-6 border-bottom">
                <ul>
                  <li><b>Social Media Strategy</b><p>Developing tailored plans to achieve business goals.</p></li>
                  <li><b>Content Creation</b><p>Crafting engaging posts, graphics, videos, and stories.</p></li>
                  <li><b>Account Management</b><p> Scheduling, publishing, and monitoring daily content.</p></li>
                  <li><b>Community Engagement</b><p>Responding to comments, messages, and building audience relationships.</p></li>
                  <li><b>Analytics and Reporting </b><p> Tracking performance metrics and delivering actionable insights.</p></li>
                  
                </ul>
              </div>
              <div className="col-md-6 border-bottom">
                <ul>
                 
                  <li><b>Social Media Advertising</b><p> Running targeted ad campaigns to increase reach and conversions.</p></li>
                  <li><b>Profile Optimization</b><p>Enhancing bios, images, and branding for a professional presence.</p></li>
                  <li><b>Hashtag Research</b><p> Identifying the best hashtags for visibility and engagement.</p></li>
                  <li><b>Influencer Marketing</b><p>Partnering with influencers to boost brand awareness.</p></li>
                  <li><b>Platform Expansion</b><p>Setting up and managing profiles on new platforms.</p></li>
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
