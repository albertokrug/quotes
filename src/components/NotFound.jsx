import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Row>
      <Col>
        <h1>404 - Page not Found</h1>
        <p>
          Try this: <Link to="/">Go to Home </Link>
        </p>
      </Col>
    </Row>
  );
};

export default NotFound;
