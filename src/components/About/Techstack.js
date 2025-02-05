import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs
} from "react-icons/di";
import {
  SiPhp,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiReact,
  SiJquery,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { LiaJava } from "react-icons/lia"
import { RiAngularjsFill } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
// import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <h5><i>React Js</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <h5><i>JavaScript</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5><i>Node Js</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiAngularjsFill />
        <h5><i>Angular Js</i></h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
        <h5><i>React Native</i></h5>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h5><i>Express Js</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h5><i>HTML</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h5><i>CSS</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
        <h5><i>jQuery</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <LiaJava/>
        <h5><i>Java</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h5><i>Cpp</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
        <h5><i>PHP</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h5><i>MongoDB</i></h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
        <h5><i>Kotlin</i></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h5><i>TypeScript</i></h5>
      </Col> */}
     
    </Row>
  );
}


export default Techstack;
