/* eslint-disable react/no-unused-state */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      content: null,
    };
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick(btnName) {
    this.setState((state) => calculate(state, btnName));
  }

  render() {
    const { content } = this.state;
    return (
      <>
        <Display result={content || '0'} />
        <ButtonPanel clickHandler={this.handleCLick} />
      </>
    );
  }
}

export default App;
