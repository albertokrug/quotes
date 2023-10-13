import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Social = () => {
  const stylePadding = { paddingRight: "2px" };
  return (
    <>
      <FacebookShareButton
        style={stylePadding}
        url={"https://www.example.com"}
        quote={"Dummy text!"}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        style={stylePadding}
        url={"https://www.example.com"}
        quote={"Dummy text!"}
        hashtag="#muo"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton
        style={stylePadding}
        url="https://www.example.com"
        subject="hello"
        body="world!!!"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
      <LinkedinShareButton
        style={stylePadding}
        url="https://www.example.com"
        title="Hello"
        summary="world"
        source="albert"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </>
  );
};

export default Social;
