import axios from "axios";
import React from "react";
import Post from "./Post";

const baseURL = "https://quotes-api-pdk2.onrender.com/rest/posts/latest";

export default function PostLatest() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return <Post post={post} />;
}
