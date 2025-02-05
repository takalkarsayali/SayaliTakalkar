import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MishiPay from "../../Assets/Projects/MishiPay.png";
import fitnessClub from "../../Assets/Projects/fitnessClub.png";
import iNoteBook from "../../Assets/Projects/iNoteBook.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={fitnessClub}
              isBlog={false}
              title="Fitness Club"
              description="This application is a fitness exercise guide that helps users find exercises based on muscle groups and equipments. It features a horizontally scrollable slider to display exercises, categorized by body parts and equipments. Users can search for exercises, and it will also show YouTube videos to demonstrate similar exercises."
              ghLink="https://github.com/takalkarsayali/fitness-app"
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={iNoteBook}
              isBlog={false}
              title="iNoteBook"
              description="This application is designed for storing any information in the form of notes. It features secure login and sign-up functionality to ensure data safety and protection."
              ghLink="https://github.com/takalkarsayali/iNoteBook"
              demoLink="https://i-note-book-beta.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={MishiPay}
              isBlog={false}
              title="Mishi Pay"
              description="MishiPay Clone is a web application that replicates the innovative features of the original MishiPay platform, enabling a seamless shopping experience through self-checkout technology. Built using HTML, CSS, and JavaScript, this clone allows users to scan product barcodes directly from their mobile devices, facilitating a quick and convenient checkout process without the need to wait in line."
              ghLink="https://github.com/takalkarsayali/mishiPay_SearchIn"
              demoLink="https://takalkarsayali.github.io/mishiPay_SearchIn/"              
            />
          </Col>
          
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A simple yet interactive Tic-Tac-Toe game built using Java, demonstrating core object-oriented programming (OOP) concepts like arrays, loops, and condition handling. The game allows two players to take turns marking Xs and Os on a 3x3 grid, with built-in logic to detect wins, draws, and invalid moves. This project enhances problem-solving skills and strengthens Java programming fundamentals."
              ghLink="https://github.com/takalkarsayali/tic-tac-toe"
              demoLink=""              
            />
          </Col>
          
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A simple yet interactive Tic-Tac-Toe game built using Java, demonstrating core object-oriented programming (OOP) concepts like arrays, loops, and condition handling. The game allows two players to take turns marking Xs and Os on a 3x3 grid, with built-in logic to detect wins, draws, and invalid moves. This project enhances problem-solving skills and strengthens Java programming fundamentals."
              ghLink="https://github.com/takalkarsayali/prescribe"
              demoLink="https://takalkarsayali.github.io/prescribe/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

/*
fitness app
iNotebook
sudoku solver
tic tac toe
architecture 
mishi pay
prescribe
drum set
snake game
quize
birthday greeting
play n learn
Almank-internship portfolio
fun with numbers
calculator
*/

