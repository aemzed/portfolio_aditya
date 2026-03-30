import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ overflowX: "auto", width: "100%", paddingBottom: "20px" }}>
        <img
          src="https://ghchart.rshah.org/aemzed"
          alt="GitHub contribution chart"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </div>
    </Row>
  );
}

export default Github;
