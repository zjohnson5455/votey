import React, { Component } from 'react';
import AppNavigator from './navigation/appNav';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yoState: 'yo',
    };
  }

  render() {
    return <AppNavigator />;
  }
}

export default Root;
