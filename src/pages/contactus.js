import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputGroup, Row, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

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
              <h5>Head Office Opposite Achimota Police Station- Accra </h5>
              <br />
              <h5>
                <span className="fw-bold">Phone :</span> +233 209 221 302 / +233
                243 628 024
              </h5>
            </div>
            <div className="col-md">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

                <Button type="submit" className="bg-light text-dark fw-bold">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
