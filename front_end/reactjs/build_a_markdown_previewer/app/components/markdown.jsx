import React from 'react';
import MarkConverted from './markConverted';

var MarkDown = React.createClass({
  render: function () {
    return (
      <div className="col1">
        <textarea value={this.props.text} onChange={this.props.onChange} >
        </textarea>
      </div>
    )
  }
});

module.exports = MarkDown;
