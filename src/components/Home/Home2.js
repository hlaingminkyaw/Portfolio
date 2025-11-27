import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a dedicated <b className="purple">PHP & Laravel Developer</b> with
              hands-on experience in building reliable, scalable backend systems.
              Over the past two years, I’ve worked on real-world projects such as
              a Ticket Management System and digital platforms used in Myanmar,
              gaining strong skills in developing structured, efficient, and secure applications.
              <br /><br />
              My core expertise includes:
              <i>
                <b className="purple">
                  {" "}
                  PHP, Laravel, MySQL, REST APIs, JavaScript
                </b>
              </i>
              — and I enjoy crafting clean architectures and optimizing performance
              across backend workflows.
              <br /><br />
              I’m passionate about creating
              <i>
                <b className="purple"> Web Applications, Business Management Systems, </b>
              </i>
              and improving existing processes through automation and scalable design.
              <br /><br />
              Whenever possible, I love building applications with
              <b className="purple"> Laravel </b> along with modern frontend tools like{" "}
              <i>
                <b className="purple">Vue.js</b> or <b className="purple">React.js</b>.
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
