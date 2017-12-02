import React, { Component } from 'react';

class Form extends React.Component {
  state = { formula: '' }

  render() {
    return (
      <form onSubmit/*={this.prop.onSubmit(this.state.formula)}*/>
        <input type="text"
          value={this.state.formula}
          onChange={(event) => this.setState({ formula: event.target.value })}
          placeholder="math formula" required />
        <button type="submit">plot formula</button>
      </form>
    );
  }
}

export default Form;