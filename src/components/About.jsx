import { Badge, Col, Image, Row, Stack } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "../styles/about.css";
import profile from "../styles/profile.jpg";

const About = () => {
  return (
    <>
      <Row>
        <Col sm={{ span: 5 }} xs={{ span: 12 }} className="vcard">
          I'm a softwaredeveloper from Kalkar in Germany. Over time i have
          gained experience in various aspects of development. Recently I've
          been working with the MERN-Stack. This site is the first result of it.
          Keep watching to find out more from me.
        </Col>
        <Col sm={{ span: 3 }} xs={{ span: 12 }} className="logo">
          <Image src={profile} className="rainbow" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>Projects in different Companies</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }}>
          <h3>Xovi</h3>
          <p>
            Development, expansion and maintenance of a tool platform around
            search engine optimization.
            <Stack direction="horizontal" gap={2}>
              <Badge bg="dark">Javascript</Badge>
              <Badge bg="dark">PHP</Badge>
              <Badge bg="dark">Maria DB</Badge>
            </Stack>
          </p>
        </Col>
        <Col sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }}>
          <h3>Begabtenzentrum</h3>
          <p>Training around Java 8 and Minecraft plugins.</p>
          <Stack direction="horizontal" gap={2}>
            <Badge bg="dark">Java 8</Badge>
            <Badge bg="dark">Minecraft</Badge>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }}>
          <h3>Igedo</h3>
          <p>
            CRM – tool for a fashion organizer with expanded filter options and
            connection to other internal and external tools.
            <Stack direction="horizontal" gap={2}>
              <Badge bg="dark">Javascript</Badge>
              <Badge bg="dark">PHP</Badge>
              <Badge bg="dark">Maria DB</Badge>
            </Stack>
          </p>
        </Col>
        <Col sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }}>
          <h3>KTM</h3>
          <p>
            Development, expansion and maintenance of a B2B platform in the
            e-commerce sector.
            <Stack direction="horizontal" gap={2}>
              <Badge bg="dark">Javascript</Badge>
              <Badge bg="dark">Java 11</Badge>
              <Badge bg="dark">SAP Commerce</Badge>
            </Stack>
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }}>
          <h3>Europace</h3>
          <p>
            Work on a macro service to connect the internal data model to the
            data model of a bank.
            <Stack direction="horizontal" gap={2}>
              <Badge bg="dark">Java 11</Badge>
            </Stack>
          </p>
        </Col>
        <Col sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }}>
          <h3>Veto</h3>
          <p>
            Greenfield – Project: Design and development of an ERP – System for
            managing internal resources.
            <Stack direction="horizontal" gap={2}>
              <Badge bg="dark">React</Badge>
              <Badge bg="dark">PHP</Badge>
              <Badge bg="dark">Maria DB</Badge>
            </Stack>
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={{ span: 2 }} lg={{ span: 2 }} xs={{ span: 6 }}>
          <h3>Contact</h3>
          <p>krugalbert@yahoo.de</p>
        </Col>
        <Col md={{ span: 2 }} lg={{ span: 2 }} xs={{ span: 6 }}>
          <h3>Skills</h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>MERN -Stack</li>
            <li>LAMP -Stack</li>
            <li>Java - Stack</li>
          </ul>
        </Col>
        <Col md={{ span: 2 }} lg={{ span: 2 }} xs={{ span: 6 }}>
          <h3>Hobbies</h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Gardening</li>
            <li>Swimming</li>
          </ul>
        </Col>
        <Col md={{ span: 2 }} lg={{ span: 2 }} xs={{ span: 6 }}>
          <h3>Education</h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Information technology assistant</li>
            <li>Application developer</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default About;
