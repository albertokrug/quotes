import { Col, Form, Row } from "react-bootstrap";

export default function LanguageSelector(props) {
  const handleLanguageSelect = (e) => {
    const selectedLocale = e.target.value;
    props.onChangeHandler(selectedLocale);
  };

  return (
    <Form inline={"true"}>
      <Row>
        <Col xs="auto">
          <Form.Select onChange={handleLanguageSelect}>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            {/* Add more language options */}
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
}
