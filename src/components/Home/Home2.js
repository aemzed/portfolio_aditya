import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2({ language = "id" }) {
  const isIndonesian = language === "id";

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {isIndonesian ? (
                <>
                  IZINKAN SAYA <span className="purple"> PERKENALKAN </span> DIRI
                </>
              ) : (
                <>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </>
              )}
            </h1>
            {isIndonesian ? (
              <p className="home-about-body">
                Saya mulai tertarik pada dunia pemrograman dan terus belajar
                untuk meningkatkan kualitas solusi yang saya bangun.
                <br />
                <br />
                Saya cukup familiar dengan teknologi seperti
                <i>
                  <b className="purple">
                    {" "}
                    PHP, JavaScript, TypeScript, Flutter, dan .NET
                  </b>
                </i>
                .
                <br />
                <br />
                Fokus utama saya saat ini adalah mengembangkan
                <i>
                  <b className="purple"> web dan mobile technologies</b>
                </i>
                .
                <br />
                <br />
                Jika memungkinkan, saya juga membangun produk menggunakan
                <b className="purple"> Node.js</b> serta
                <i>
                  <b className="purple">
                    {" "}
                    modern JavaScript libraries and frameworks
                  </b>
                </i>
                &nbsp;seperti
                <i>
                  <b className="purple"> React.js dan Next.js</b>
                </i>
                .
              </p>
            ) : (
              <p className="home-about-body">
                I fell in love with programming and have continued learning to
                improve the quality of solutions I build.
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple">
                    {" "}
                    PHP, JavaScript, TypeScript, Flutter, and .NET
                  </b>
                </i>
                .
                <br />
                <br />
                My field of interest is building
                <i>
                  <b className="purple"> web and mobile technologies</b>
                </i>
                .
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    modern JavaScript libraries and frameworks
                  </b>
                </i>
                &nbsp;like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
                .
              </p>
            )}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{isIndonesian ? "TEMUKAN SAYA DI" : "FIND ME ON"}</h1>
            <p>
              {isIndonesian ? (
                <>
                  Silakan <span className="purple">terhubung </span>dengan saya
                </>
              ) : (
                <>
                  Feel free to <span className="purple">connect </span>with me
                </>
              )}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aemzed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-maulana-zunaidi-992b85223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dit.saja/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
