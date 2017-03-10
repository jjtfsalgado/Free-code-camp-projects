import React from 'react';

import BodyBoard from './body-board';

import Api from '../api/api';

var TitleBoard = React.createClass({
  getInitialState: function () {
    return{
      data: undefined,
      fontAll:'bold',
      fontLast:'normal'
    }
  },
  componentWillMount: function () {
    var that = this;

    Api.getAll().then(function(res){
      that.setState({
        data: res.data,
        fontAll: 'bold',
        fontLast: 'normal'
      })
    });
  },
  handleClickAll: function () {
    var that = this;

    Api.getAll().then(function(res){
      that.setState({
        data: res.data,
        fontAll: 'bold',
        fontLast: 'normal'
      })
    });
  },
  handleClickLast: function () {
    var that = this;

    Api.getLast().then(function(res){
      that.setState({
        data: res.data,
        fontAll: 'normal',
        fontLast: 'bold'
      })
    });
  },
  render: function() {
    return(
      <div className="title-board">
        <div className="row1">
          <p>Leaderboard</p>
        </div>
        <div className="row2">
          <div className="col1">#</div>
          <div className="col2">Camper Name</div>
          <div className="col3" onClick={this.handleClickLast} style={{fontWeight:this.state.fontLast}}><a href="#">Points in past 30 days</a></div>
          <div className="col4" onClick={this.handleClickAll} style={{fontWeight:this.state.fontAll}}><a href="#">All time points</a></div>
        </div>
        <BodyBoard allData={this.state.data}/>
      </div>
    )
  }
});

module.exports = TitleBoard;
