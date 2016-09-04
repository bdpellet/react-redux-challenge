import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SubjectForm from './subjectForm';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.test();
	}

  render() {
    return (
      <div>
      	<SubjectForm onSubmit={this.handleFormSubmit} />
        {console.log(this.props.fb, this.props.form)}
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
