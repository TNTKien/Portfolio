import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, we are <span className="purple">Bac Le Than Xa </span>
            from <span className="purple"> Vietnam.</span>
            <br />
            We're a scanlation group that translates R18-Doujin and Manga.
            <br />
            Up to now we have completed over 2000 oneshots and series.
            <br />
            <br />
            Apart from translating, some other activities that we love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Your Mom
            </li>
            <li className="about-activity">
              <ImPointRight /> Your Dad
            </li>
            <li className="about-activity">
              <ImPointRight /> Your Sister
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Địt con mẹ cái team lồn!"{" "}
          </p>
          <footer className="blockquote-footer">Mem BLTX</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
