import React, { Component, createContext } from "react";
export const ThemeContext = createContext();
export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }
  handleToggle = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, handleToggle: this.handleToggle }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
