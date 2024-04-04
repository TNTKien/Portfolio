import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import koharu from "../../Assets/Projects/koharu.png";
import Typewriter from "typewriter-effect";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

async function getBooks(){
  const api = 'https://api.baclethanxa.me/books';
  const resp = await fetch(api);
  const data = await resp.json();
  const demoBooks = data.slice(0, 15);
  const projectCards = demoBooks.map((book, index) => (
    <Col md={4} className="project-card" key={index}>
      <ProjectCard
        imgPath={book.cover}
        title={book.title}
        demoLink={book.url}
        //description={book.tags.join(", ")}
      />
    </Col>
  ));
  return projectCards;
}

function Projects() {  
  const [projectCards, setProjectCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   getBooks().then(cards => setProjectCards(cards));
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    getBooks().then(cards => {
      setProjectCards(cards);
      setIsLoading(false);
    });
  }, []);

  const [isConfirmed, setIsConfirmed] = useState(false);
  if (!isConfirmed) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1 className="project-heading" >
          ⚠️<strong className="purple">NSFW</strong> WARNING⚠️
        </h1>
        <img className="warning-img" src={koharu} alt="Warning" />
        <button className="confirm-btn" onClick={() => setIsConfirmed(true)}>I'm Safe!</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1 className="project-heading">
          {/* <strong className="purple">Loading...</strong> */}
          <Typewriter
          options={{
            strings: [ 'Loading...' ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
        </h1>
      </div>
    ); // Replace this with your loading component or spinner
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects we've worked on recently.

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectCards}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://baclethanxa.me//Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>*/}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
