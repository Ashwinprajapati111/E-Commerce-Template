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

const product_li = [
  {
    id: "02",
    title: "Graphic Designing",
    img_link: "../../images/category/graphics.png",
    price: "$ 12.00",
    view_link: "/graphic_designing"
  },
  {
    id: "03",
    title: "Printing Solution",
    img_link: "../../images/category/print.png",
    price: "$ 12.00",
    view_link: "/printing"
  },
  {
    id: "01",
    title: "Video Editing",
    img_link: "../../images/category/video.png",
    price: "$ 12.00",
    view_link: "/video"
  },
  {
    id: "04",
    title: "Web Solution",
    img_link: "../../images/category/product.png",
    price: "$ 12.00",
    view_link: "/web"
  },
  {
    id: "05",
    title: "Social Media Advertisement",
    img_link: "../../images/category/social.png",
    price: "$ 12.00",
    view_link: "/social"
  },
  {
    id: "06",
    title: "Tshirt Printing",
    img_link: "../../images/category/tshirt.png",
    price: "$ 12.00",
    view_link: "/tshirt"
  },
  {
    id: "07",
    title: "Gents Tailoring",
    img_link: "../../images/category/tailor.png",
    price: "$ 12.00",
    view_link: "/gents"
  },
  {
    id: "08",
    title: "Construction Consultant",
    img_link: "../../images/category/construction.png",
    price: "$ 12.00",
    view_link: "/construction"
  },
];


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
          <section className="section-products">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-md-8 col-lg-6">
                  <div className="header">
                    <h2>Our Services</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <!-- Single Product --> */}
                {product_li.map((a) => {
                  return (
                    <div className="col-md-6 col-lg-4 col-xl-3 ">
                      <div className="single-product  my-single-product " >
                        <Link to={a.view_link}><img src={a.img_link} className="product_image shadow border" /></Link>
                        <div className="part-2">
                          <h3 className="product-title my_top_margin">{a.title}</h3>
                        </div>
                      </div>
                    </div>
                  )
                })

                }

              </div>

              <Support />
            </div>

          </section>

          <div className="bg-info Tools-bg p-3 text-center mb-3">
            <h4 className="m-0">Tools to help build your business</h4>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link to="/gents" className="text-decoration-none">
                  <img
                    src="../../images/category/mens.png"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                  <div className="text-center h5 imgtitle">Men's Clothing</div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/video" className="text-decoration-none">
                  <img
                    src="../../images/category/Video Editing.png"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                  <div className="text-center h5 imgtitle">Video Production</div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/graphic_designing" className="text-decoration-none">
                  <img
                    src="../../images/category/Graphic.png"
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                  <div className="text-center h5 imgtitle">Graphic Designing</div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/web" className="text-decoration-none">
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
