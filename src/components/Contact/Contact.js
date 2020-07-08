import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "./contact.scss";
import Button from '../Button'


const Contact = () => {
  const [status, setStatus] = useState("");

  // Form spree codes
  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <>
      {status === "SUCCESS" ? (
        <div className="d-flex align-items-center justify-content-center">
          <i className="fas fa-check-circle fa-6x"></i>
          <small className="text-primary ml-3">İLETİŞİM BAŞARILI!</small>
        </div>
      ) : (
          <Form
            onSubmit={submitForm}
            action="https://formspree.io/meqrrkjj"
            method="POST"
            className="contact-form mb-5"
          >
            <Form.Group as={Row}>
              {/* Name */}
              <Col>
                <Form.Label>İsim *</Form.Label>
                <Form.Control name="name" type="text" required />
              </Col>
              {/* Email */}
              <Col>
                <Form.Label>Email *</Form.Label>
                <Form.Control name="_replyto" type="email" required />
              </Col>
            </Form.Group>
            {/* Message Subject */}
            <Form.Group>
              <Form.Label>Mesaj Konusu *</Form.Label>
              <Form.Control
                name="message-subject"
                type="text"
                required
              />
            </Form.Group>
            {/* Message */}
            <Form.Group>
              <Form.Label>Mesaj *</Form.Label>
              <Form.Control name="message" as="textarea" rows="3" required />
            </Form.Group>
            {/* Submit Button */}
            <Button name= "İletişime Geç" type="submit" value="Send" />
          </Form>
        )}
    </>
  );
};

export default Contact;
