/* 
    Build with the idea of using HOC to manage everything needed.
    Therefore, logic will be aimed at looping through given information 
    from the store.
*/
import React, { Component } from "react";
import { Header, Card, Container, Image, Icon, Segment } from "semantic-ui-react";
import logo from "../logo.svg";

interface Props {
  upload: any;
}

interface State {
  selected: Boolean;
}

export default class UploadCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <Card href={"http://127.0.0.1:5000" + this.props.upload.url}>
        <Image src={logo} />
        <Card.Content>
          <Card.Header>{this.props.upload.title}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <span className="right floated">{this.props.upload.created}</span>
          <span>{this.props.upload.owner}</span>
        </Card.Content>
      </Card>
    );
  }
}
