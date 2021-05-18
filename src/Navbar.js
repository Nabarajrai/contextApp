import React, { useContext, Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./stlyes/NavStyle";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from "./contexts/ThemeContext";

export class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const { handleToggle } = this.context;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>😆</span>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              App Title
            </Typography>
            <Switch onClick={handleToggle} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="search..."
                classes={{
                  root: classes.inputInputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Navbar);
