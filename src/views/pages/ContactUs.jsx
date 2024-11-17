import { lazy } from "react";
const ContactUsForm = lazy(() => import("../../components/ContactUsForm"));

const ContactUsView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="container my-3">
      <div className="row g-3">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <i className="bi bi-envelope"></i> Send Message
            </div>
            <div className="card-body">
              <ContactUsForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-header">
              <i className="bi bi-building"></i> Address
            </div>
            <div className="card-body">
              <h6 className="card-title border-bottom border-dark pb-2">
                Head Office
              </h6>
              <address>
                <strong>Shree Vachanamrut.</strong>
                <br />
                Shop 3 AB Tower, Shreeji Gold Complex
                <br />
                Opp.Sona Party Plot, Laxmipura, Vadodara
                <br />
                <i className="bi bi-telephone"></i>{" "}
                <abbr title="Phone">P:</abbr> +91 8511199317
              </address>
              
              
            </div>
          </div>
          <div className="card">
            <div className="google-maps">
              <iframe
              
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.744387818218!2d73.22740971008491!3d22.28767054326988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc54fc674b317%3A0x1f52246f558cc3f1!2sShree%20Vachanamrut%20Construction!5e0!3m2!1sen!2sus!4v1731637816455!5m2!1sen!2sus" 
                width={400}
                height={300}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsView;
