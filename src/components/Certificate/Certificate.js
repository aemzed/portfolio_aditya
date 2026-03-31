import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import csharpBasicPdf from "../../Assets/Certificate/c_sharp_basic certificate.pdf";
import javascriptIntermediatePdf from "../../Assets/Certificate/javascript_intermediate certificate.pdf";
import problemSolvingBasicPdf from "../../Assets/Certificate/problem_solving_basic certificate.pdf";
import restApiIntermediatePdf from "../../Assets/Certificate/rest_api_intermediate certificate.pdf";
import softwareEngineerPdf from "../../Assets/Certificate/software_engineer certificate.pdf";
import sqlAdvancedPdf from "../../Assets/Certificate/sql_advanced certificate.pdf";

const certificates = [
  { title: "Software Engineer Certificate", file: softwareEngineerPdf },
  { title: "C# Basic Certificate", file: csharpBasicPdf },
  { title: "JavaScript Intermediate Certificate", file: javascriptIntermediatePdf },
  { title: "Problem Solving Basic Certificate", file: problemSolvingBasicPdf },
  { title: "REST API Intermediate Certificate", file: restApiIntermediatePdf },
  { title: "SQL Advanced Certificate", file: sqlAdvancedPdf },
];

function Certificate() {
  const [height, setHeight] = useState("860px");

  useEffect(() => {
    if (window.innerWidth <= 786) {
      setHeight("560px");
    }
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {certificates.map((certificate) => (
          <React.Fragment key={certificate.title}>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <h2
                className="project-heading"
                style={{ fontSize: "1.35rem", marginBottom: "14px" }}
              >
                <strong className="purple">{certificate.title}</strong>
              </h2>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                style={{ maxWidth: "300px", marginBottom: "18px" }}
              >
                <AiOutlineSafetyCertificate />
                &nbsp;Open PDF
              </Button>
            </Row>

            <Row className="resume" style={{ justifyContent: "center" }}>
              <iframe
                title={certificate.title}
                src={certificate.file}
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: "980px",
                  height,
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "white",
                }}
              />
            </Row>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}

export default Certificate;
