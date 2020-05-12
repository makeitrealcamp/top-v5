import React from 'react';

function Form({ name, age, handleChange, handleSubmit, updating }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        id="age"
        onChange={handleChange}
        value={age}
      />
      <button type="submit">{updating ? 'Update' : 'Create'} user</button>
    </form>
  )
}

export default Form;
