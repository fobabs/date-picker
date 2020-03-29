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

  componentWillMount() {
    window.removeEventListener('click', this.addBackDrop);
  }
}

export default DatePicker;