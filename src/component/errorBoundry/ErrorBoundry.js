import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  state = {
    error: false,
  };

  componentDidCatch(err, info) {
    this.setState((state) => {
      return { error: !state.error };
    });
    this.consoleError(err, info);
  }

  consoleError(err, info) {
    console.log(`Error : ${err}, Error info : ${info}`);
  }

  render() {
    return this.state.error ? <h1>Error</h1> : this.props.children;
  }
}
