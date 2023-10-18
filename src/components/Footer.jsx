import Social from "./Social";
import Subscription from "../features/subscription/Subscription";
import LanguageSelector from "../features/language/LanguageSelector";
import { Col, Row } from "react-bootstrap";

const Footer = (props) => {
  return (
    <Row>
      <Col xs={{ span: 4 }} md={{ span: 4 }}>
        <Social />
      </Col>
      <Col xs={{ span: 4 }} md={{ span: 2 }}>
        <Subscription />
      </Col>
      <Col xs={{ span: 4 }} md={{ span: 2 }}>
        <LanguageSelector onChangeHandler={props.onChangeHandler} />
      </Col>
    </Row>
  );
};

export default Footer;
