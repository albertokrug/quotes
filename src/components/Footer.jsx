import { Col, Container, Navbar, Row } from "react-bootstrap";
import Social from "./Social";
import Subscription from "../features/subscription/Subscription";
import LanguageSelector from "../features/language/LanguageSelector";

const Footer = (props) => {
  return (
    <Col>
      <Navbar fixed="bottom" className="justify-content-between">
        <Container>
          <Row>
            <Col xs="auto">
              <Social />
            </Col>
            <Col xs="auto">
              <Subscription />
            </Col>
            <Col xs="auto">
              <LanguageSelector onChangeHandler={props.onChangeHandler} />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Col>
  );
};

export default Footer;
