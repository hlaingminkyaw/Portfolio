import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Hlaing Min Kyaw</span> from{" "}
            <span className="purple">Myanmar</span>.
            <br />
            I’m a <span className="purple">PHP & Laravel Developer</span> with over
            2 years of experience in backend development.
            <br />
            I specialize in building efficient, secure, and scalable web
            applications using Laravel, MySQL, REST APIs, and modern development
            tools.
            <br />
            <br />
            I’ve contributed to real-world systems such as Ticket Management
            Systems, E-commerce Platforms, Payment Integrations (MPU), and
            Admin Dashboards.
            <br />
            <br />
            Outside of coding, I love doing things that keep me active and
            creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 💡
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music 🎧
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep improving, and keep building."{" "}
          </p>
          <footer className="blockquote-footer">Hlaing Min Kyaw</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
