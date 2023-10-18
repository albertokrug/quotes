import { Form, Navbar } from "react-bootstrap";

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
          <option value="de" selected>
            Deutsch
          </option>
        </Form.Select>
      </Navbar.Text>
    </>
  );
}
