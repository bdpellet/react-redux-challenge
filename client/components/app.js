import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { findRelationship } from '../utility/helper.js';

import SubjectForm from './subjectForm';
import PersonForm from './personForm';
import RelationshipForm from './relationshipForm';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { relationship:'' };
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.generateRelationship = this.generateRelationship.bind(this);
	}

	componentWillMount() {
		this.props.retrieveData();
	}

	handleFormSubmit(values) {
		this.props.addRecord(values);
	}

	generateRelationship(values) {
		const relationship = findRelationship(values, this.props.fb.people, this.props.fb.subjects);
    this.setState({relationship});
	}

  render() {
  	const { people, subjects } = this.props.fb;

    return (
      <div>
      	<SubjectForm onSubmit={this.handleFormSubmit} />
      	<PersonForm onSubmit={this.handleFormSubmit} people={people} subjects={subjects} />
      	<RelationshipForm onSubmit={this.generateRelationship} people={people} subjects={subjects} />
        { this.state.relationship }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    form: state.form,
    fb: state.fb
  };
}

export default connect(mapStateToProps, actions)(App);
