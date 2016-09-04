import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SubjectForm = (props) => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">Add a subject:</div>
      <div className="fields-container">
        <label>Subject:</label>
        <Field name="name" component="input" type="text" placeholder="new subject"/>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'subjectForm',
  initialValues: {
    type: 'subjects'
  }
})(SubjectForm)