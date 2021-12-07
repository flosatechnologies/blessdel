import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../css/contact.css";
import { Col } from "react-bootstrap";
import { GeoAlt, Phone, Whatsapp, Instagram } from "react-bootstrap-icons";

function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div id="contactus">
      <div className="bg-primary text-dark text-center p-3">
        <h1>Contact Us</h1>
        <div className="container p-5">
          <div className="row g-4 text-white">
            <div className="col-md">
              <h5>
                If you are interested in our services, contact BLESSDEL
                CONSTRUCTION today for our expertise.
              </h5>
              <br />
              <h5>
                <GeoAlt color="white" size={50} /> Achimota Opposite Police
                Station- Accra
              </h5>
              <br />
              <h5>
                <a
                  href="tel:+233209221302"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Phone color="white" size={50} />
                  +233 209 221 302 / +233 243 628 024
                </a>
              </h5>

              <br />
              <h5>
                <a
                  href="https://wa.me/+233243628024"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Whatsapp color="green" size={50} /> +233 243 628 024
                </a>
              </h5>
              <br />
              <h5>
                <a
                  href="https://instagram.com/blessdelconstruction/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Instagram color="#8a3ab9" size={50} /> Connect with us
                </a>
              </h5>
            </div>
            <div className="col-md">
              <Form
                action="https://formkeep.com/f/5d81f7a96ba7"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
                method="POST"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group
                  as={Col}
                  controlId="validationCustom01"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    defaultValue=""
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="validationCustom02"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="your-email@gmail.com"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="validationCustom03"
                  className="mb-3"
                >
                  <Form.Control type="number" placeholder="Phone" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="validationCustom04"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Subject" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid subject.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="validationCustom05"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Message Here"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="validationCustom04"
                  className="mb-3"
                >
                  <Form.Control
                    as="input"
                    type="submit"
                    value="Submit"
                    placeholder="Subject"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "700",
                      borderRadius: "5px",
                      pointer: "cursor",
                    }}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
