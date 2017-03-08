import React from 'react';

var MarkConverted = React.createClass({
  render: function () {
    return (
      <div className="col2" dangerouslySetInnerHTML={this.props.onChange}>
      </div>
    )
  }
});

module.exports = MarkConverted;
