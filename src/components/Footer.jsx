import { Col, Container, Navbar } from "react-bootstrap";
import Social from "./Social";
import Subscription from "../features/subscription/Subscription";

const Footer = () => {
  return (
    <Col>
      <Navbar fixed="bottom">
        <Container>
          <Navbar.Collapse>
            <Social />
            <Subscription />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
  );
};

export default Footer;
