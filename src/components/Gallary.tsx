import React, { Component } from "react";
import { Card, Container, Segment, Header } from "semantic-ui-react";
import UploadCard from "./Card";
import "./Gallary.css";

export default class Gallary extends Component {
  // TODO: create functions to send out `getter and setter` signals for cards.
  constructor(props: any) {
    super(props);
  }

  prop = require("./upoads.json");

  render() {
    let listCards = this.prop.map((prop: any) => <UploadCard upload={prop} />);
    let cards = (
      <Card.Group doubling itemsPerRow="5">
        {listCards}
      </Card.Group>
    );

    let segment;
    if (this.prop.length === 0) {
      segment = (
        <Segment placeholder>
          <Header textAlign="center">
            No uploads listed, please upload something...
          </Header>
        </Segment>
      );
    } else {
      segment = <Segment>{cards}</Segment>;
    }

    return (
      <Container className="main">
        {/* have a place holder for when nothing has been uploaded */}
        {segment}
      </Container>
    );
  }
}
