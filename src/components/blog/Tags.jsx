import React, { lazy } from "react";
import { Link } from "react-router-dom";
const Line = lazy(() => import("../others/Line"));

const Tags = (props) => {
  return (
    <div className={`mb-4 px-4 bg-light rounded border ${props.className ? props.className : ""}`}>
      <h4 className="fst-italic">{props.title}</h4>
      <Line className="mb-2" />
      <Link to="/graphic_designing" className="btn btn-sm btn-outline-dark me-2 mb-2">
      Graphics
      </Link>
      <Link to="/printing" className="btn btn-sm btn-outline-dark me-2 mb-2">
      Printing
      </Link>
      <Link to="/video" className="btn btn-sm btn-outline-dark me-2 mb-2">
      Video Editing
      </Link>
      <Link to="/web" className="btn btn-sm btn-outline-dark me-2 mb-2">
      Web Solution
      </Link>
      <Link to="/social" className="btn btn-sm btn-outline-dark me-2 mb-2">
      Social Media
      </Link>
      <Link to="/tshirt" className="btn btn-sm btn-outline-dark me-2 mb-2">
      Tshirt Printing
      </Link>
      <Link to="/gents" className="btn btn-sm btn-outline-dark me-2 mb-2">
      Gents Tailoring
      </Link>
      <Link to="/construction" className="btn btn-sm btn-outline-dark me-2 mb-2">
      Construction
      </Link>
    </div>
  );
};
export default Tags;
