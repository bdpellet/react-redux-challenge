import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const fields = {
  friends: [],
  subjects: []
}

const PersonForm = (props) => {
  const { people, subjects, handleSubmit, reset } = props;

  const renderItemCheckBox = (items, type) => {
    return _.map(items, (item, key) => {
      const f = type === 'subject' ? fields.subjects : fields.friends;
      return (
          <div key={key} className="fields-checkbox-item">
            <input className="checkbox-custom" type="checkbox" onChange={e => e.target.checked ? f.push(key) : f.splice(f.indexOf(key), 1)} />
            <label className="checkbox-custom-label">{item.name}</label>
          </div>
      )
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields-container">
        <div className="fields-header">Add a person</div>
        <hr />
        <label className="field-header">Name: </label>
        <Field name="name" component="input" type="text" placeholder="new person"/>
        <hr />
        <label className="field-header">Select all the subjects this person is an expert in: </label>
        <div className="fields-checkbox-container">
          {renderItemCheckBox(subjects, 'subject')}
        </div>
        <hr />
        <label className="field-header">Select all the people this person knows: </label>
        <div className="fields-checkbox-container">
          {renderItemCheckBox(people, 'people')}
        </div>
        <hr />
        <button type="submit">Add Person</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'peopleForm',
  initialValues: {
    type: 'people',
    friends: fields.friends,
    subjects: fields.subjects
  }
})(PersonForm)