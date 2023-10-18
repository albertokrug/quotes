import { Col, Row } from "react-bootstrap";
import PostLatest from "../features/posts/PostLatest";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <Row>
      <Col md={{ span: 8 }}>
        <FormattedMessage id="home_1" />
      </Col>
      <PostLatest />
    </Row>
  );
};

export default Home;
