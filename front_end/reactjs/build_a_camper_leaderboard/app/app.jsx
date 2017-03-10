var React = require('react');
var ReactDOM = require('react-dom');

var LeaderBoardApp = require('./components/leader-board-app');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <LeaderBoardApp/>,
  document.getElementById('app')
);
