import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${formData.email}, Message: ${formData.message}`);
  };

  return (
    <Col md={{ span: 8, offset: 2 }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <FormattedMessage id="contact_1" />
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.email}
            name="email"
            id="email"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <FormattedMessage id="contact_2" />
          </Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.message}
            id="message"
            name="message"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button type="submit" variant="dark">
          <FormattedMessage id="contact_3" />
        </Button>
      </Form>
    </Col>
  );
};

export default Contact;
