import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SubjectForm = (props) => {
  const { handleSubmit, reset, subjects } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields-container">
        <span className="fields-header">Add a subject</span>
        <br /><hr />
        <div>
          <label>Name: </label>
          <Field name="name" component="input" type="text" placeholder="new subject"/>
        </div>
        <br /><hr />
        <button disabled={console.log(this)} type="submit">Add Subject</button>
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