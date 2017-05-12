import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateValueAction } from '../actions/';

class InputBox extends Component {
	constructor(props) {
		super(props);
		this.state = {value: 0};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const value = +e.target.value;
		this.setState({ value });
		this.props.update(value);
	}

	render() {
		return (
			<div>
				<div className="value">{this.state.value}</div>
				<input type="range" min="0" max="10" step="1" value={this.state.value} onChange={this.handleChange} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({ update: payload => dispatch(updateValueAction(payload)) });

export default connect(null, mapDispatchToProps)(InputBox);