import React from "react";
import ReactDOM from "react-dom";
import Resume from './resume'
import 'semantic-ui-css/semantic.min.css';

const myJSONResume = require('./person.js').person

ReactDOM.render(
  <Resume jsonResume={myJSONResume} theme="default" />,
  document.getElementById("root")
);