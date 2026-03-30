import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Aditya_Maulana_Zunaidi_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [height, setHeight] = useState("850px");

  useEffect(() => {
    if (window.innerWidth <= 786) {
      setHeight("520px");
    }
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <iframe
            title="resume"
            src={pdf}
            style={{
              width: "100%",
              maxWidth: "900px",
              height,
              border: "none",
              borderRadius: "8px",
            }}
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
