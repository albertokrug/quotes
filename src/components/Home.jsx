import { Col } from "react-bootstrap";
import PostLatest from "../features/posts/PostLatest";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <>
      <Col md={{ span: 8, offset: 2 }}>
        <FormattedMessage id="home_1" />
      </Col>
      <PostLatest />
    </>
  );
};

export default Home;
