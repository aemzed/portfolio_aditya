import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Zunaidi </span>
            from <span className="purple"> Surabaya, Indonesia.</span>
            <br />
            I am currently employed as a software developer at ILCS (Member of Pelindo Group).
            <br />
            I have completed my diploma in Information System at Universitas Airlangga.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Journal & Novel
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Face your problems and let the whole world know that you can get through them!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya Zunaidi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
