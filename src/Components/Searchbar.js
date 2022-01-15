import React from "react";
import { Form } from "react-bootstrap";

export const Searchbar = () => {
  return <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="search" placeholder="Search..." />
          <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>
};