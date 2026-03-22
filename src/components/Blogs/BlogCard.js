import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";

function BlogCard(props) {
    return (
        <Card className="blog-card-view" style={{ textAlign: "left", marginBottom: "30px", backgroundColor: "transparent", border: "1px solid rgba(255, 255, 255, 0.2)", backdropFilter: "blur(10px)" }}>
            {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="blog-img" style={{ height: "250px", objectFit: "cover" }} />}
            <Card.Body style={{ padding: "30px" }}>
                <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.9em", marginBottom: "10px" }}>{props.date}</p>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.8em", fontWeight: "bold", marginBottom: "15px" }}>{props.title}</Card.Title>
                <Card.Text style={{ color: "white", fontSize: "1.1em", lineHeight: "1.6", marginBottom: "25px" }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" as={Link} to={props.link}>
                    <BsBook /> &nbsp; Read Article
                </Button>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;
