import React from "react";
import Card from "react-bootstrap/Card";
import { AiTwotoneHeart } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sayali Takalkar  </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently employed as a software developer at Hindustan Platinum Pvt. Ltd.
            <br />
            I have completed Bachelor of Engineering (BE) in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiTwotoneHeart /> Sketching
            </li>
            <li className="about-activity">
              <AiTwotoneHeart /> Dancing
            </li>
            <li className="about-activity">
              <AiTwotoneHeart /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
