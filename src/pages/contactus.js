import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../css/contact.css";
import { InputGroup, Row, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  ArrowRight,
  Geo,
  GeoAlt,
  Phone,
  Telephone,
  Whatsapp,
} from "react-bootstrap-icons";

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
                If you are interested in our services, contact the expertise of
                BLESSDEL ENTERPRISE today.
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
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Whatsapp color="green" size={50} /> +233 243 628 024
                </a>
              </h5>
            </div>
            <div className="col-md">
              <Form
                action="https://formkeep.com/f/43fcd44c02ac"
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

                <input
                  style={{
                    width: "10rem",
                    height: "3rem",
                    fontWeight: "700",
                    borderRadius: "5px",
                    pointer: "cursor",
                  }}
                  type="submit"
                  value="Submit"
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
