import React, { Component } from "react";
import CardItem from "./CardItem";
import "./App.css";

export default class Card extends Component {
  constructor() {
    super();
    this.state = { countItem: 0 };
    this.state = { countItem: 0 };
  }

  caseOne = () => this.setState({ countItem: this.state.countItem + 1 });
  caseTwo = () => this.setState({ countItem: this.state.countItem - 1 });

  render() {
    return (
      <div id="Card">
        <CardItem
          row={{
            item: "Item1",
            price: "3.5",
          }}
          plusItem={this.caseOne}
          minusItem={this.caseTwo}
        />
        <CardItem
          row={{
            item: "Item2",
            price: "2.4",
          }}
          plusItem={this.caseOne}
          minusItem={this.caseTwo}
        />
        <CardItem
          row={{
            item: "Item3",
            price: "6.5",
          }}
          plusItem={this.caseOne}
          minusItem={this.caseTwo}
        />
        <CardItem
          row={{
            item: "Item4",
            price: "2.5",
          }}
          plusItem={this.caseOne}
          minusItem={this.caseTwo}
        />
        <CardItem
          row={{
            item: "Item5",
            price: "3.5",
          }}
          plusItem={this.caseOne}
          minusItem={this.caseTwo}
        />
        <h1> toqa {this.state.countItem} </h1>
      </div>
    );
  }
}
