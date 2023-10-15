import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [myHref, setMyHref] = useState("mailto:krugalbert@yahoo.de");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const prevent = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    if (formData.email === "" || formData.message === "") return true;

    let myHrefTemp = myHref;
    myHrefTemp += `?subject=${encodeURIComponent(
      "mail from: " + formData.email
    )}&body=${encodeURIComponent(formData.message)}`;

    setMyHref(myHrefTemp);
    event.target.href = myHref;
    return true;
  };

  return (
    <Col md={{ span: 8, offset: 2 }}>
      <Form onSubmit={prevent}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>
            <FormattedMessage id="contact_1" />
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>
            <FormattedMessage id="contact_2" />
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.message}
            name="message"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button href={myHref} onClick={handleSubmit} variant="dark">
          <FormattedMessage id="contact_3" />
        </Button>
      </Form>
    </Col>
  );
};

export default Contact;
