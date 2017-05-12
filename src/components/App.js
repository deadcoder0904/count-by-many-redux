import React, { Component } from 'react';
import Button from  './Button';
import InputBox from  './InputBox';
import { incrementAction, decrementAction } from  '../actions/';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Count By Many Redux</h1>
        </div>
        <p className="App-intro">
          Increases & Decreases Count using Redux as state management library.
        </p>
        <InputBox />
        <Button text="INCREMENT"handler={() => this.props.increment(this.props.value)} />
        <Button text="DECREMENT"handler={() => this.props.decrement(this.props.value) } />
        <div className="value">{this.props.counter}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ counter: +state.counter, value: +state.value });
const mapDispatchToProps = dispatch => ({ increment: count => dispatch(incrementAction(count)), decrement: count => dispatch(decrementAction(count)) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
