import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SubjectForm = (props) => {
	const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      Add a subject:
      <Field name="name" component="input" type="text" placeholder="new subject"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'subjectForm'
})(SubjectForm)