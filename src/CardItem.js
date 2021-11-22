import React, { Component, useState } from "react";
import "./Card";

class CardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  plus = (props) => {
    this.setState( { counter: this.state.counter + 1 });
    this.props.plusItem();
  };
    minus = () => {
    if (this.state.counter > 0) {
        this.setState({ counter: this.state.counter - 1 });
        this.props.minusItem();

    }
  };

   

  render() {
    return (
      <div id="cadr">
        <h3> {this.props.row.item}</h3>
        <h5> {this.props.row.price}</h5>
        <button onClick={this.plus}> + </button>
        <h5> {this.state.counter}</h5>
        <button onClick={this.minus}> - </button>
        
      </div>
    );
  }
}

export default CardItem;
