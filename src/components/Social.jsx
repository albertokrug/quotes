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

const myurl = "https://quotes-lj5u.onrender.com/quotes";

const Social = () => {
  const stylePadding = { paddingRight: "2px" };
  return (
    <>
      <FacebookShareButton
        style={stylePadding}
        url={myurl}
        quote={"Read every day a new quote."}
        hashtag="#albertsQuotes"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        style={stylePadding}
        url={myurl}
        quote={"Read every day a new quote."}
        hashtag="#albertsQuotes"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton
        style={stylePadding}
        url={myurl}
        subject="Alberts quotes"
        body="Get everday a new quote"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
      <LinkedinShareButton
        style={stylePadding}
        url={myurl}
        title="Alberts quotes"
        summary="Gives everyday a new quote"
        source="Alberts quotes"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </>
  );
};

export default Social;
