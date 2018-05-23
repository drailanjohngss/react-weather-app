import React, { Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	// Prevent the form from reloading
	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
		// We need to go and fetch weather data
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
				<input
					placeholder="Get a five day forecast on your favourite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange.bind(this)}
				/>
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">
						Get
					</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
