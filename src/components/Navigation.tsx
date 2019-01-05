import React, { Component } from "react";
import { Container, Menu, Grid, Dropdown } from "semantic-ui-react";

export default class NavBar extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Menu borderless fixed="top" fluid>
        <Menu.Item header>MysticalUI</Menu.Item>
        <Menu.Menu borderless position="right">
          <Menu.Item header>
            <a href="#">Login</a>
          </Menu.Item>
          <Menu.Item>
            <Dropdown icon="user" text="<user.name>" labeled>
              <Dropdown.Menu>
                <Dropdown.Item text="Profile" />
                <Dropdown.Item text="Uploads" />
                <Dropdown.Divider />
                <Dropdown.Item text="Logout" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
