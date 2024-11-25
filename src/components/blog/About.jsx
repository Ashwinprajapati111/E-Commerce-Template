import React, { lazy } from "react";
const Line = lazy(() => import("../others/Line"));

const About = (props) => {
  return (
    <div
      className={`p-4 mb-3 bg-light rounded border ${
        props.className ? props.className : ""
      }`}
    >
      <h4 className="fst-italic">{props.title}</h4>
      <Line className="mb-2" />
      <p className="mb-0">
      Our services combine creativity and technology to craft visually appealing and functional digital experiences. Graphic design focuses on branding, logos, and visuals, while web services ensure responsive, user-friendly websites through development and maintenance. Together, they help businesses build strong online identities and engage effectively with their audiences.
      </p>
    </div>
  );
};
export default About;
