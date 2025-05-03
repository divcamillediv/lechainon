import * as React from "react";
import "./footer.css";
import {  Row, Col, Form, InputGroup, Button, Image } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <footer className="py-4 vw-100 p-4" style={{ backgroundColor: "#d9d9d9" }}>
        <Row className="justify-content-between align-items-center">
          {/* Contact Info */}
          <Col md={4} className="mb-4 mb-md-0">
            <p className="mb-1 fw-semibold">Chaînon & Chaînon Foundation</p>
            <div className="d-flex align-items-center mb-2">
              <BsFillTelephoneFill className="me-2" style={{ fontSize: "1.2rem" }} />
              <p className="mb-1">514 845-0151</p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaLocationDot className="me-2" style={{ fontSize: "1.2rem" }} />
              <p className="mb-0">4373, De l'Esplanade Av. , Montreal, QC H2W 1T2</p>
            </div>
          </Col>

          {/* Newsletter & Logo */}
          <Col md={3} className="d-flex flex-column justify-content-md-end vw-25 text-md-end">
            <p className="fw-semibold">Subscribe to our newsletter</p>
            <Form>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
                <Button variant="outline-secondary" type="submit" className="bg-light">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0ad56a69c3679194068aa6ffb6a459d91c7192b6e190895261e941f5b32f311?apiKey=78b3824f9340487c994130168bf8c43f&"
                    alt="Submit"
                    style={{ width: "20px", height: "25px" }}
                  />
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>  
    </footer>
    </>
  );
}

export default Footer;
