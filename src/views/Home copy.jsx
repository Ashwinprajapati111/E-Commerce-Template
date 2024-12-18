import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
import './ass.css'; 

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product.img];
            return (
              <div key={idx} className="col-md-3">
                <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                >
                  <ProductImage className={product.cssClass} width="80" height="80" />
                </CardIcon>
              </div>
            );
          })}
        </div>
      </div>
    ));

    return (
      <div>
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        <div className="container-fluid bg-light mb-3">
          <div className="row g-3 main-dive">
            <div className="col-md-12">
              <Carousel id="elect-product-category" className="mb-3">
                {carouselContent}
              </Carousel>
              <Support />              
            </div>
          </div>
        </div>
        <div className="row g-3 main-dive">
            <div className="col-md-12">
              <Carousel id="elect-product-category" className="mb-3">
                {carouselContent}
              </Carousel>
                   
            </div>
          </div>
   

        <div className="bg-info Tools-bg p-3 text-center mb-3">
          <h4 className="m-0">Tools to help build your business</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/mens.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h5 imgtitle">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/Video Editing.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h5 imgtitle">Video Production</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/Graphic.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h5 imgtitle">Graphic Designing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/web.png"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h5 imgtitle">Web Development</div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
      </div>
    );
  }
}

export default HomeView;
