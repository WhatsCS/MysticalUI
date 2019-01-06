/* 
    Build with the idea of using HOC to manage everything needed.
    Therefore, logic will be aimed at looping through given information 
    from the store.
*/
import React, { Component } from "react";
import { Header, Card, Container, Image, Icon, Segment } from "semantic-ui-react";
import logo from "../logo.svg";

export default class UploadCard extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: Boolean,
    };
  }

  card_component = (
    <Card>
      <Image src={logo} width="250" height="250" />
      <Card.Content>
        <Card.Header>Upload Title</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <span className="right floated">Upload Date</span>
        <span>Username</span>
      </Card.Content>
    </Card>
  );

  render() {
    return (
      <Card.Group doubling itemsPerRow="5" className="link">
        {this.card_component}
      </Card.Group>
    );
  }
}
