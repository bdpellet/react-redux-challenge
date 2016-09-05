import React from 'react'
import { Field, reduxForm } from 'redux-form'

const RelationshipForm = (props) => {
  const { people, subjects, handleSubmit } = props;

  const renderOptions = (items, type) => {
    return _.map(items, (item, key) => {
      return (
        <option key={key} value={key}>{item.name}</option>
      )
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields-container">
        <div className="fields-header">Find relationship</div>
        <hr />
        <label className="field-header">Person:  </label>
        <Field name="person" component="select">
          <option></option>
          {renderOptions(people)}
        </Field>
        <label className="field-header"> Subject:  </label>
        <Field name="subject" component="select">
          <option></option>
          {renderOptions(subjects)}
        </Field>
        <hr />
        <button type="submit">Calculate</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'relationshipForm'
})(RelationshipForm)
