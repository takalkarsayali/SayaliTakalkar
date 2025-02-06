import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiEclipseide,
  SiNotion,
  SiLinux
} from "react-icons/si";
import { IoLogoGithub } from 'react-icons/io';
import { BsFiletypeSql } from "react-icons/bs";
import { DiTerminal } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5><i>Visual Studio</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5><i>Postman</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
        <h5><i>SQL</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <h5><i>Eclipse</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h5><i>Linux</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGithub />
        <h5><i>Git/GitHub</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
        <h5><i>Notion</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
        <h5><i>Terminal</i></h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
