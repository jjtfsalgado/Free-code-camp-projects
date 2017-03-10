import React from 'react';

import Api from '../api/api';

var Row = React.createClass({
  render: function() {
    var list = this.props.data;

    if (list) {
      console.log(list);
      return(
        <table className="row-board">
            {list.map((row, index) =><tr key={index}><td>{index+1}</td><td><img src={row.img} height="42" width="42"/> {row.username}</td><td>{row.recent}</td><td>{row.alltime}</td></tr>)}
        </table>
      )
    }else {
      return(
        <p>Fetching Data</p>
      )
    }
  }
});

module.exports = Row;
