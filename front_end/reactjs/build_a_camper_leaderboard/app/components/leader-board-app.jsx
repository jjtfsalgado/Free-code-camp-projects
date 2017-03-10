import React from 'react';

import TitleBoard from './title-board';

var LeaderBoardApp = React.createClass({
  render: function() {
    return(
      <div className="container">
        <TitleBoard/>
      </div>
    )
  }
});

module.exports = LeaderBoardApp;
