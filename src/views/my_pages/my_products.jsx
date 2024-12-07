import { lazy } from "react";
import { Link } from "react-router-dom";
import '../../views/ass.css';


const Widgets = lazy(() => import("../../components/blog/Widgets"));

const BlogDetailView = () => {
  const product_li = [
    {
      id: "02",
      title: "Business Cards",
      img_link: "../../images/category/products/01cards.png",
      price: "$ 12.00",
      view_link: "/graphic_designing"
    },
    {
      id: "03",
      title: "Non-woven Bags",
      img_link: "../../images/category/products/02bag.png",
      price: "$ 12.00",
      view_link: "/printing"
    },
    {
      id: "01",
      title: "Letterhead",
      img_link: "../../images/category/products/03 letterhead.png",
      price: "$ 12.00",
      view_link: "/video"
    },
    {
      id: "04",
      title: "Brochures",
      img_link: "../../images/category/products/04 brochure.png",
      price: "$ 12.00",
      view_link: "/web"
    },
    {
      id: "05",
      title: "Photo Mugs",
      img_link: "../../images/category/products/10 mug.png",
      price: "$ 12.00",
      view_link: "/social"
    },
    {
      id: "06",
      title: "Albums",
      img_link: "../../images/category/products/06 album.png",
      price: "$ 12.00",
      view_link: "/tshirt"
    },
    {
      id: "07",
      title: "Menu cards",
      img_link: "../../images/category/products/07 menu.png",
      price: "$ 12.00",
      view_link: "/gents"
    },
    {
      id: "08",
      title: "Stickers",
      img_link: "../../images/category/products/08 stickers.png",
      price: "$ 12.00",
      view_link: "/construction"
    },
    {
      id: "08",
      title: "Photo frame",
      img_link: "../../images/category/products/09 photoframe.png",
      price: "$ 12.00",
      view_link: "/construction"
    },
    {
      id: "08",
      title: "Invitation Cards",
      img_link: "../../images/category/products/11 invitation.png",
      price: "$ 12.00",
      view_link: "/construction"
    },
    {
      id: "08",
      title: "ID Cards",
      img_link: "../../images/category/products/05 id cards.png",
      price: "$ 12.00",
      view_link: "/construction"
    },
    {
      id: "08",
      title: "Lanyard",
      img_link: "../../images/category/products/12 lanyard.png",
      price: "$ 12.00",
      view_link: "/construction"
    },
    {
      id: "08",
      title: "Envelopes",
      img_link: "../../images/category/products/13 envelope.png",
      price: "$ 12.00",
      view_link: "/construction"
    },
    {
      id: "08",
      title: "Bill Books",
      img_link: "../../images/category/products/15 billbook.png",
      price: "$ 12.00",
      view_link: "/construction"
    },
    {
      id: "08",
      title: "Printed Pen",
      img_link: "../../images/category/products/15 pen.png",
      price: "$ 12.00",
      view_link: "/construction"
    },
    {
      id: "08",
      title: "Printed T-shirts",
      img_link: "../../images/category/products/16 tshirt.png",
      price: "$ 12.00",
      view_link: "/construction"
    }
  ];
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mb-3">
        <img
          src="../../images/my_pages/web.png"
          className="card-img rounded-0"
          alt="..."
        />

      </div>

      <section className="section-products my-section">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-md-8 col-lg-6">
                  <div className="header">
                    <h2>Our Products</h2>
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


            </div>

          </section>
    </div>
  );
};

export default BlogDetailView;
