import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


class DeliveryForm extends Component {

  render() {
    return(
      <div>
        <Form onChange={this.props.handleFormChange} onSubmit={this.props.handleOnSubmit}>
          <FormGroup>
            <Label for="address1">Address</Label>
            <Input type="text" name="address1" id="address1" value={this.props.address1} />
          </FormGroup>
          <FormGroup>
            <Label for="address2">Address 2</Label>
            <Input type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" value={this.props.address2}/>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" value={this.props.city}/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input type="text" name="state" id="state" value={this.props.state}/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input type="text" name="zip" id="zip" value={this.props.zip}/>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="restaurant">Restaurant</Label>
            <Input type="text" name="restaurant" id="restaurant" value={this.props.restaurant}/>
          </FormGroup>
          <Button>Search</Button>
        </Form>
      </div>
    )
  }

}



export default DeliveryForm
