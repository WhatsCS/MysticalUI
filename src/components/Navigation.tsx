import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Icon, Button } from "./Imports";

export default function NavMenu() {
  return (
    <div className="NavigationMenu">
      <AppBar>
        <Toolbar>
          <IconButton color="secondary">
            <Icon>home</Icon>
          </IconButton>
          <Typography variant="h6" color="inherit">
            MysticalUI
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
