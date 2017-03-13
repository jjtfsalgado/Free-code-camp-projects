import React from 'react';

var Recipe = React.createClass({
  render: function() {
    var ingredients = this.props.ingredients;
    var arrayIngredients = ingredients.split(',');
    return(
      <div>
        <h3>Ingredients</h3>
        <ul>
          {arrayIngredients.map((row, index) => (
          <li key={index}>{row}</li>
          ))}
        </ul>
      </div>
    )
  }
});

module.exports = Recipe;
