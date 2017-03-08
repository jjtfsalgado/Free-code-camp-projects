var React = require('react');
var ReactDOM = require('react-dom');

var MarkApp = require('./components/markapp');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <MarkApp/>,
  document.getElementById('app')
);
