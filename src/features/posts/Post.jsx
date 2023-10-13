import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Post(props) {
  const date = new Date(props.post.createdAt);
  return (
    <Col style={{ paddingTop: "10px" }} md={{ span: 8, offset: 2 }}>
      <Card>
        <Card.Header>
          {props.post.title} -{" "}
          {date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay()}
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> {props.post.body} </p>
            <footer className="blockquote-footer">@{props.post.saidBy}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Col>
  );
}
