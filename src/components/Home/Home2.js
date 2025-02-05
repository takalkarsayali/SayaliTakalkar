import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/hello3.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="mb-5">
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {/* LET ME <span className="purple"> INTRODUCE </span> MYSELF */}
              Here's a Little About <u className="purple"><br />WHO I AM</u>
            </h1>
            <p className="home-about-body">
              I discovered my passion for programming and technology during my early learning days, and it has been a fascinating journey ever since!
              <br />
              <br />I am proficient in modern tools and languages like,
              <i>
                <b className="purple"> JavaScript, Node.js </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> PHP  </b>
              </i>
              with working experience in<i><b className="purple"> React.js, Angular Js, </b></i>
              &nbsp; and
              <i><b className="purple"> HTML5 / CSS3. </b></i>
              <br />
              <br />
              I love applying my skills to build scalable and impactful solutions, leveraging frameworks like <i><b className="purple"> Node.js</b></i> and <i><b className="purple">React.js</b></i>.
              I thrive on challenges that involve creating seamless user experiences and enjoy collaborating with teams to bring ideas to life.
              <br /><br />
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let’s connect through</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/takalkarsayali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sayali-takalkar-9555b6219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SayaliTakalkar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sayali.takalkar0502@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <IoIosMail />
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



