import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Card style={{ height: '40rem', width: '85rem', marginLeft: 'auto', marginRight: 'auto' }}>
      <Card.Header style={{ backgroundColor: "white", fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
        Ticket Pricing
      </Card.Header>
      <Card.Body style={{ backgroundColor: "#03a5fc" }}>
        <Container>
        <form style={{ color: 'white', marginLeft: '80px', marginBottom: '15px' }}>
          <Row>
            <Col>
          <label>Box</label></Col>
          <Col><label >Balcony</label></Col>
          </Row>
          <br />
          <Row>
            <Col>
          <label>CGST</label>
          <input className="inputstyle" type="text" name="cgst" placeholder="Enter CGST" /></Col>
          <Col><label >CGST</label>
          <input className="inputstyle" type="text" name="cgst" placeholder="Enter CGST" /></Col>
          </Row>
          <br />
          <Row>
          <Col><label >SGST</label>
          <input className="inputstyle" type="text" name="sgst" placeholder="Enter SGST" /></Col>
          <Col><label >SGST</label>
          <input className="inputstyle" type="text" name="cgst" placeholder="Enter SGST" /></Col>
          </Row>
          <br />
          <Row>
          <Col><label >Additional charges</label>
          <input className="inputstyle" type="text" name="add cost" placeholder="Enter Additional Charges" /></Col>
          <Col><label >Additional Charges</label>
          <input className="inputstyle" type="text" name="cgst" placeholder="Enter Additional Charges" /></Col>
          </Row>
          <br />
          <Row>
          <Col><label >Total</label>
          <input className="inputstyle" type="text" name="total" /></Col>
          <Col><label >Total</label>
          <input className="inputstyle" type="text" name="cgst" /></Col>
          </Row>
          <br />
          <br />
          <Row>
          <Col><label >First Class Ticket</label></Col>
          <Col><label>Second Class Ticket</label></Col>
          </Row>
          <br />
          <Row>
          <Col><label>CGST</label>
          <input className="inputstyle" type="text" name="cgst" placeholder="Enter CGST" /></Col>
          <Col><label>CGST</label>
          <input className="inputstyle" type="text" name="cgst" placeholder="Enter CGST" /></Col>
          </Row>
          <br />
          <Row>
          <Col><label >SGST</label>
          <input className="inputstyle" type="text" name="csst" placeholder="Enter SGST" /></Col>
          <Col><label >SGST</label>
          <input className="inputstyle" type="text" name="cgst" placeholder="Enter SGST" /></Col>
          </Row>
          <br />
          <Row>
          <Col><label >Additional charges</label>
          <input className="inputstyle" type="text" name="add charges" placeholder="Enter Additional Charges" /></Col>
          <Col><label >Additional Charges</label>
          <input className="inputstyle" type="text" name="cgst" placeholder="Additional Charges" /></Col>
          </Row>
          <br />
          <Row>
          <Col><label >Total</label>
          <input className="inputstyle" type="text" name="total" /></Col>
          <Col><label >Total</label>
          <input className="inputstyle" type="text" name="cgst" /></Col>
          </Row>
          <br />
        </form>
        </Container>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: "grey" }}>
        <Button style={{ backgroundColor: "#ffffff", float: 'right', marginLeft: "10px", color: "#008fb3", borderColor: "#ffffff", borderRadius: 5 }} size="sm">Add</Button>
        <Button style={{ backgroundColor: "#ffffff", float: 'right', marginLeft: "2px", color: "#008fb3", borderColor: "#ffffff", borderRadius: 5 }} variant="primary" size="sm">Cancel</Button>
      </Card.Footer>
    </Card>
  );
}
export default App;
