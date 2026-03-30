import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projects from "../../data/projects";

function Projects() {
  const [selectedCompany, setSelectedCompany] = useState("All");
  const companyFilters = ["All", ...new Set(projects.map((project) => project.company))];
  const filteredProjects =
    selectedCompany === "All"
      ? projects
      : projects.filter((project) => project.company === selectedCompany);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-hero-panel">
          <p className="project-kicker">Portfolio Highlights</p>
          <h1 className="project-heading">
            Key <strong className="purple">Project Experience</strong>
          </h1>
          <p className="project-hero-description">
            Curated delivery portfolio across HR systems, startup products, and
            enterprise port logistics integrations.
          </p>

          <div className="project-quick-stats">
            <div className="project-stat-item">
              <span>{projects.length}</span>
              <p>Projects</p>
            </div>
            <div className="project-stat-item">
              <span>{companyFilters.length - 1}</span>
              <p>Companies</p>
            </div>
            <div className="project-stat-item">
              <span>{new Set(projects.map((project) => project.domain)).size}</span>
              <p>Domains</p>
            </div>
          </div>

          <div className="project-filter-wrap">
            {companyFilters.map((company) => (
              <button
                key={company}
                className={`project-filter-btn ${
                  selectedCompany === company ? "active" : ""
                }`}
                onClick={() => setSelectedCompany(company)}
              >
                {company}
              </button>
            ))}
          </div>
        </div>

        <Row className="project-grid">
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
