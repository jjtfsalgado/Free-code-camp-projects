import React from 'react';

import Row from './row-board';

var BodyBoard = React.createClass({
  render: function() {
    return(
      <div>
        <Row data={this.props.allData}/>
      </div>
    )
  }
});

module.exports = BodyBoard;
