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
        <label className="checkbox-label" key={key}>
          <input type="checkbox" onChange={e => e.target.checked ? f.push(key) : f.splice(f.indexOf(key), 1)} />
          {item.name}
        </label>
      )
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields-container">
        <div className="fields-header">Add a person</div>
        <br /><hr />
        <label>Name: </label>
        <Field name="name" component="input" type="text" placeholder="new person"/>
        <br /><hr />
        <div className="fields-checkbox-container">
          <label>Expert at: </label>
          <br />
          {renderItemCheckBox(subjects, 'subject')}
        </div>
        <br /><hr />
        <div className="fields-checkbox-container">
          <label>Friends: </label>
          <br />
          {renderItemCheckBox(people, 'people')}
        </div>
        <br /><hr />
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