import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  // Detect screen width
  const isMobile = window.innerWidth < 768;

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <div style={{ overflowX: "auto", width: "100%" }}>
        <GitHubCalendar
          username="soumyajit4419"
          blockSize={isMobile ? 12 : 30}   // smaller blocks on mobile
          blockMargin={isMobile ? 4 : 10} // reduce spacing on mobile
          fontSize={isMobile ? 10 : 20}   // reduce text size
          color="#c084f5"
        />
      </div>
    </Row>
  );
}

export default Github;
