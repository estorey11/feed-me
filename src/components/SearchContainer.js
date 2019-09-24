import React, { Component } from 'react';
import DeliveryForm from './DeliveryForm'

class SearchContainer extends Component {

  state={
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    restaurant: ""
  }

  handleFormChange=event=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <DeliveryForm
          address1={this.state.address1}
          address2={this.state.address2}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          restaurant={this.state.restaurant}
          handleFormChange={this.handleFormChange}
          />
      </div>
    )
  }

}



export default SearchContainer
