import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DatePicker.css';

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp;

class DatePicker extends Component {
  state = {
    getMonthDetails: []
  }
}

export default DatePicker;