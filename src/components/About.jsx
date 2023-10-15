import { Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <Col md={{ span: 8, offset: 2 }}>
      <h1>
        <FormattedMessage id="about_1" />
      </h1>
      <p>
        <FormattedMessage id="about_2" />
      </p>

      <h3>
        <FormattedMessage id="about_3" />
      </h3>
      <p>
        <ul>
          <li>
            <FormattedMessage id="about_4" />
          </li>
          <li>
            <FormattedMessage id="about_5" />
          </li>
          <li>
            <FormattedMessage id="about_6" />
          </li>
          <li>
            <FormattedMessage id="about_7" />
          </li>
        </ul>
      </p>
    </Col>
  );
};

export default About;
