import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";
import UploadCard from "./Card";
import "./Gallary.css";

export default class Gallary extends Component {
  render() {
    return (
      <Container className="main">
        <Segment>
          <UploadCard />
        </Segment>
      </Container>
    );
  }
}
