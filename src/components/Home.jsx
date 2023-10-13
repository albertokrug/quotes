import { Col } from "react-bootstrap";
import PostLatest from "../features/posts/PostLatest";

const Home = () => {
  return (
    <>
      <Col md={{ span: 8, offset: 2 }}>Read the latest Quote.</Col>
      <PostLatest />
    </>
  );
};

export default Home;
