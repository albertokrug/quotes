import { Col } from "react-bootstrap";

const About = () => {
  return (
    <Col md={{ span: 8, offset: 2 }}>
      <h1>About me</h1>
      <p>This is the first result of using the MERN - Stack.</p>

      <h3>Products</h3>
      <p>
        <ul>
          <li>MongoDB</li>
          <li>TS.ED</li>
          <li>React</li>
          <li>NodeJs</li>
        </ul>
      </p>
    </Col>
  );
};

export default About;
