import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


class DeliveryForm extends Component {

  render() {
    return(
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState"/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip"/>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="restaurant">Restaurant</Label>
            <Input type="text" name="restaurant" id="restaurant"/>
          </FormGroup>
          <Button>Search</Button>
        </Form>
      </div>
    )
  }

}



export default DeliveryForm
