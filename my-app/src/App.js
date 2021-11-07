import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { IoIosAddCircle } from "react-icons/io";

function App() {
  return (
    <Card text="black" style={{ height: '40rem', width: '35rem', float:"right" }}>
      <Card.Header className="text-center" style={{ backgroundColor: "white", fontSize: 20, fontWeight: 'bold' }}>
        <Button style={{ float: 'left', borderRadius: 7 }} variant="primary" size="sm">{"< "}Back</Button>
        Food and Beverages
      </Card.Header>
      <Card.Body style={{ backgroundColor: "#03a5fc" }}>
        <Form>
          <Form.Group className="mb-3" controlId="foodname">
            <Form.Label style={{ color: 'white' }}>Food Name</Form.Label>
            <Form.Control style={{ fontSize: 14, padding: 3, width: 300 }} placeholder="Add The Food Name" />
          </Form.Group>
          <div style={{ width: "180px", height: "180px", backgroundColor: "white", float: "right", borderRadius: "7px",display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
          <IoIosAddCircle color="grey" size="60px"></IoIosAddCircle>
        </div>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label style={{ color: 'white' }}>Choose The Category</Form.Label>
            <Form.Select style={{ fontSize: 14, padding: 3, width: 300 }} aria-label="Default select example">
              <option>Choose The Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="addr">
            <Form.Label style={{ color: 'white' }}>Address(Optional)</Form.Label>
            <Form.Control style={{ fontSize: 14, padding: 3, width: 300 }} size="sm" placeholder="Add The Address If It is Applicable" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cost">
            <Form.Label style={{ color: 'white' }}>Food and Beverages Cost</Form.Label>
            <Form.Control style={{ fontSize: 14, padding: 3, width: 300 }} size="sm" placeholder="Enter the Food and Beverage Cost" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cost">
            <Form.Label style={{ color: 'white' }}>Addon Cost</Form.Label>
            <Form.Control style={{ fontSize: 14, padding: 3, width: 300 }} size="sm" placeholder="Enter the Addon Cost" />
          </Form.Group>
          <Row className="g-2">
            <Col md>
              <Form.Label style={{ color: 'white', marginLeft: 80 }}>Total Cost</Form.Label>
            </Col>
            <Col md>
              <Form.Control style={{ fontSize: 14, marginRight: 227, width: 90 }} size="sm" />
            </Col>
          </Row>
        </Form>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: "grey" }}>
        <Button style={{ backgroundColor: "#ffffff", float: 'right', marginLeft: "10px", color: "#008fb3", borderColor: "#ffffff", borderRadius: 7 }} size="sm">Cancel</Button>
        <Button style={{ backgroundColor: "#ffffff", float: 'right', marginLeft: "2px", color: "#008fb3", borderColor: "#ffffff", borderRadius: 7 }} variant="primary" size="sm">Update</Button>
      </Card.Footer>
    </Card>
  );
}

export default App;