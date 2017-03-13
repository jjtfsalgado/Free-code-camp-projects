import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import Api from '../actions/crudApi';

import Recipe from './recipe';

var RecipesList = React.createClass({
  getInitialState: function () {
    return{
      recipes: undefined
    }
  },
  componentWillMount: function () {
    var that = this;

    Api.getRecipes().then(function(res){
      that.setState({
        recipes: res.recipes
      })
    });
  },
  render: function() {
    var all = this.state.recipes;

    if (all) {
      return(
        <div>
          {all.map((row, index) => (
            <PanelGroup defaultActiveKey={index} key={index} accordion>
              <Panel header={row.title}>
                <Recipe ingredients={row.text}/>
              </Panel>
            </PanelGroup>
          ))}
        </div>
      )
    }else {
      return(
        <p>Fetching Data</p>
      )
    }
  }
});

module.exports = RecipesList;
