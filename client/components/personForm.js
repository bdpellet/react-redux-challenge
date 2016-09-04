import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash';

const fields = {
  friends: [],
  subjects: []
}

const PersonForm = (props) => {
  const { people, subjects, handleSubmit } = props;

  const renderItemCheckBox = (items, type) => {
    return _.map(items, (item, key) => {
      const f = type === 'subject' ? fields.subjects : fields.friends;
      return (
        <label key={key}>
          {item.name}
          <input type="checkbox" onChange={e => e.target.checked ? f.push(key) : f.splice(f.indexOf(key), 1)} />
        </label>
      )
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">Add a person</div>
      <div className="fields-container">
        <label>Person name:</label>
        <Field name="name" component="input" type="text" placeholder="new person"/>
        <br />
        <br />
        <label>Add the fields this person is an expert in:</label>
        {renderItemCheckBox(subjects, 'subject')}
        <br />
        <br />
        <label>Select your friends:</label>
        {renderItemCheckBox(people, 'people')}
        <button type="submit">Submit</button>
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