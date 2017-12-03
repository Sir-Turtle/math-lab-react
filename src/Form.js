import React from 'react';

class Form extends React.Component {
  state = { 
    formula: '',
    operatorsSupported: ['+','-','^'],
    variables: []
   }
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Event: Form Submit, ' + this.state.formula);
    // for(let operator of this.state.operatorsSupported){
    //   var index = this.state.formula.indexOf(operator);
    //   console.log('index: ', index);
    //   if(index > -1){
    //     console.log('operator found: ', operator);
    //     this.setState({ variables: this.state.formula.split(index) });
    //     break;
    //   } else {
    //     console.log('operator not found: ', operator);
    //     this.setState({ variables: [] });
    //   }
    // }
    // console.log('variables: ', this.state.variables);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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