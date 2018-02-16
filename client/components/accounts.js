import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render the Blaze Accounts form then find the div we just
    // rendered in the 'render' method and place Blaze account in that div
    Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
