import { Col, Form, Navbar, Row } from "react-bootstrap";

export default function LanguageSelector(props) {
  const handleLanguageSelect = (e) => {
    const selectedLocale = e.target.value;
    props.onChangeHandler(selectedLocale);
  };

  return (
    <>
      <Navbar.Text>
        <Form.Select onChange={handleLanguageSelect}>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          {/* Add more language options */}
        </Form.Select>
      </Navbar.Text>
    </>
  );
}
