import { Row, Col, Container, Form, TextArea, Button } from "react-bootstrap";
import { MdContactPhone } from "react-icons/md";
import { BiPaperPlane } from "react-icons/bi";
import { FaFileInvoice, FaTools } from "react-icons/fa";
import { Fade } from "react-reveal";

export default function ProcessSection() {
  return (
    <section
      style={{
        position: "relative",
      }}
      className="process-section"
    >
      <Container fluid style={{ width: "95vw", overflow: "hidden" }}>
        <div className="display-5 text-center text-uppercase ">Our Process</div>
        <hr style={{ width: 80 }}></hr>
        <Fade left cascade>
          <Row>
            <br></br>
            <br></br>
            <Col className="process-steps">
              <MdContactPhone size={80} />
              <br></br>
              <br></br>
              <h6>
                <strong>Step 1</strong>
              </h6>
              <br></br>
              <p>
              Contact Us <br></br>
              </p>
            </Col>
            <Col className="process-steps">
              <BiPaperPlane size={80} />
              <br></br>
              <br></br>
              <h6>
                <strong>Step 2</strong>
              </h6>
              <br></br>
              <p>
              Book An Appointment <br></br>
              </p>
            </Col>
            <Col className="process-steps">
              <FaFileInvoice size={80} />
              <br></br>
              <br></br>
              <h6>
                <strong>Step 3</strong>
              </h6>
              <br></br>
              <p>
              Document what is required <br></br>
              </p>
            </Col>
            <Col className="process-steps">
              <FaTools size={80} />
              <br></br>
              <br></br>
              <h6>
                <strong>Step 4</strong>
              </h6>
              <br></br>
              <p>
             Confirm Appointment <br></br>
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
}
