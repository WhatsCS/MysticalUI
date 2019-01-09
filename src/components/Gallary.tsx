import React, { Component } from "react";
import { Card, Container, Segment, Header } from "semantic-ui-react";
import UploadCard from "./Card";
import "./Gallary.css";

export default class Gallary extends Component {
  // TODO: create functions to send out `getter and setter` signals for cards.
  constructor(props: any) {
    super(props);
  }
  prop = [
    {
      id: "wQjz58a",
      title: "test",
      owner: "whatscs",
      created: "2018-12-09T06:48:02.524518Z",
      file: "test.png",
      url: "/media/test.png",
    },
    {
      id: "a5XNEjE",
      title: "test",
      owner: "whatscs",
      created: "2018-12-09T06:53:30.223635Z",
      file: "test_DeoVlhR.png",
      url: "/media/test_DeoVlhR.png",
    },
    {
      id: "wbWVo87",
      title: "test",
      owner: "whatscs",
      created: "2018-12-09T06:54:02.935376Z",
      file: "🌰🌬🐒🕛💾🌊🕥🗹🖋🐠🐼🎃🏂💚🗫.png",
      url:
        "/media/%F0%9F%8C%B0%F0%9F%8C%AC%F0%9F%90%92%F0%9F%95%9B%F0%9F%92%BE%F0%9F%8C%8A%F0%9F%95%A5%F0%9F%97%B9%F0%9F%96%8B%F0%9F%90%A0%F0%9F%90%BC%F0%9F%8E%83%F0%9F%8F%82%F0%9F%92%9A%F0%9F%97%AB.png",
    },
    {
      id: "k1j3yW5",
      title: "test",
      owner: "whatscs",
      created: "2018-12-09T06:57:30.854572Z",
      file: "👳👪💎🔴👱🏄🌑👀🖭🕂🍈👘🕢🗫🕽.png",
      url:
        "/media/%F0%9F%91%B3%F0%9F%91%AA%F0%9F%92%8E%F0%9F%94%B4%F0%9F%91%B1%F0%9F%8F%84%F0%9F%8C%91%F0%9F%91%80%F0%9F%96%AD%F0%9F%95%82%F0%9F%8D%88%F0%9F%91%98%F0%9F%95%A2%F0%9F%97%AB%F0%9F%95%BD.png",
    },
    {
      id: "J8Y3pXD",
      title: "test",
      owner: "whatscs",
      created: "2018-12-09T06:57:57.111392Z",
      file: "🐨🔦🖉👬🏨🐲🕲💝🖁🏝🖹🌢🐒👯🖮.png",
      url: "/media/🐨🔦🖉👬🏨🐲🕲💝🖁🏝🖹🌢🐒👯🖮.png",
    },
    {
      id: "5W7QQjQ",
      title: "test",
      owner: "whatscs",
      created: "2018-12-09T23:17:34.494894Z",
      file: "🍢📐🎡🎽💂👗🎗🌄📄🎡🌢🕿🎨🍺👵.png",
      url: "/media/🍢📐🎡🎽💂👗🎗🌄📄🎡🌢🕿🎨🍺👵.png",
    },
  ];

  render() {
    let listCards = this.prop.map(prop => <UploadCard upload={prop} />);
    let cards = (
      <Card.Group doubling itemsPerRow="5">
        {listCards}
      </Card.Group>
    );

    let segment;
    if (this.prop.length === 0) {
      segment = (
        <Segment placeholder>
          <Header textAlign="center">No uploads listed, please upload something...</Header>
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
