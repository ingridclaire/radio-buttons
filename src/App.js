import React from 'react';
import './App.css';
import Symptom from './Symptom';


class App extends React.Component {
  state = {
    dryCough: '',
    shortness: '',
    fever: ''
  }

  onInputChange = (e) => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  renderSymptom = (symptom) => {
    let label;
    switch(symptom) {
      case 'dryCough':
        label = 'Dry Cough'
        break;
      case 'shortness':
        label = 'Shortness of Breath'
        break;
      case 'fever':
        label = 'Fever'
        break;
      default:
        label = ''
    }
    return (
      <Symptom
        name={symptom}
        label={label}
        currentState={this.state[symptom]}
        onInputChange={this.onInputChange}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <form className="radio-form" onSubmit={this.onFormSubmit}>
          {this.renderSymptom('dryCough')}
          {this.renderSymptom('shortness')}
          {this.renderSymptom('fever')}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
