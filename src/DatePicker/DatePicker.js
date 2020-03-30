import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DatePicker.css';

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);

class DatePicker extends Component {
  state = {
    getMonthDetails: []
  }

  componentDidMount() {
    window.addEventListener('click', this.addBackDrop);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.addBackDrop);
  }

  addBackdrop = e => {
    if (this.state.showDatePicker && !ReactDOM.findDOMNode(this).contains(e.target))
      this.showDatePicker(false);
  }

  showDatePicker = (showDatePicker=true) => {
    this.setState({ showDatePicker })
  }

  render() {
    return (
      <div className='DatePicker'>
        <div className='mdp-input' onClick={() => this.showDatePicker(true)}>
          <input type='date' />
        </div>
        {this.state.showDatePicker ? (
          <div className='mdp-container'></div>
        ) : ''}
      </div>
    )
  }
}

export default DatePicker;