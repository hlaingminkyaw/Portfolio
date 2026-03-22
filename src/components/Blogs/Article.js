import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Article() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={10} style={{ textAlign: "left", color: "white", paddingBottom: "50px" }}>
                        <h1 style={{ fontSize: "2.5em", paddingBottom: "20px", color: "#c770f0", fontWeight: "bold" }}>
                            Laravel Relationship - Avoid Nested Relationships
                        </h1>
                        <p style={{ fontSize: "1.2em", color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>
                            March 22, 2026
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px" }}>What is a database?</h3>
                        <p style={{ fontSize: "1.1em", lineHeight: "1.8", marginBottom: "20px" }}>
                            A database is a system for storing our data. It allows us to manage our data with ease. We can store the data in big query rows, which makes our database heavier, but we don't need it in our day-to-day operation.
                        </p>
                        <p style={{ fontSize: "1.1em", lineHeight: "1.8", marginBottom: "20px" }}>
                            For example, we have bio-information of a user which includes: <code>name email password address 1 address 2 state zip phone emergency_contact_name emergency_contact_phone recovery_email active suspended verified</code>. You can put everything in a single row, but we don't need everything just to check login.
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px" }}>Simplifying Relationships</h3>
                        <p style={{ fontSize: "1.1em", lineHeight: "1.8", marginBottom: "20px" }}>
                            So, we simplify the data into two tables: <code>users</code> and <code>users_information</code>. The user table only has information like <code>name, email, password, active</code>.
                            When the client attempts to log in, they use email and password. This simple split makes an enormous optimization if we have millions of rows. We can access the rest with an eloquent relationship on the User model: <code>$user-&gt;information</code>.
                        </p>

                        <h3 style={{ color: "#c770f0", marginTop: "30px", marginBottom: "15px" }}>Avoiding Deep Nesting</h3>
                        <p style={{ fontSize: "1.1em", lineHeight: "1.8", marginBottom: "20px" }}>
                            If we have many pivot tables, like assigning a school, we must put the user ID on every class they attend. Let's imagine:
                            <code>School-&gt;courses-&gt;subjects-&gt;exams-&gt;grades</code>.
                        </p>
                        <p style={{ fontSize: "1.1em", lineHeight: "1.8", marginBottom: "20px" }}>
                            When a student enrolls in a course, they need a <code>user-&gt;course</code> pivot table. However, we can simplify the long relationship using a <code>course_id</code> on the exam table. Now, each course can easily call its exams as a <code>$course-&gt;exams</code> relationship without traversing subjects.
                        </p>

                        <p style={{ fontSize: "1.1em", lineHeight: "1.8", marginTop: "40px", fontStyle: "italic", borderLeft: "4px solid #c770f0", paddingLeft: "15px", color: "rgba(255,255,255,0.8)" }}>
                            In conclusion, we don't have to make nested relationships to call the data we like to use. We can reference the specific fields we would like to use for the results to keep queries efficient and code readable.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Article;
