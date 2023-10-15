import axios from "axios";
import React from "react";
import PostList from "./PostList";
import { Button, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const baseURL = process.env.REACT_APP_BACKEND_URL + "posts/paginated";

export default function PostPaginated() {
  const [posts, setPosts] = React.useState([]);
  const [skip, setSkip] = React.useState(0);

  React.useEffect(() => {
    console.log({ limits: { skip, lim: 5 } });
    console.log(posts);
    axios.post(baseURL, { limits: { skip, lim: 5 } }).then((response) => {
      if (skip === 0) {
        setPosts((prevState) => [...response.data]);
      } else {
        setPosts((prevState) => [...prevState, ...response.data]);
      }
    });
  }, [skip]);

  const handleMoreQuotes = () => {
    setSkip((prevSkip) => prevSkip + 5);
  };

  if (!posts || posts.length === 0) return null;

  return (
    <>
      <PostList posts={posts} />
      <Col md={{ span: 8, offset: 2 }} style={{ paddingTop: "10px" }}>
        <div className="d-grid gap-2">
          <Button variant="dark" size="lg" onClick={handleMoreQuotes}>
            <FormattedMessage id="quotes_1" />
          </Button>
        </div>
      </Col>
    </>
  );
}
