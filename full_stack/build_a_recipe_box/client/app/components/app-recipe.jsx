import React from 'react';

import RecipesList from './recipes-list';
import AddRecipe from './add-recipe';

var AppRecipe = React.createClass({
  render: function() {
    return(
      <div className="container">
        <RecipesList/>
        <AddRecipe/>
      </div>
    )
  }
});

module.exports = AppRecipe;
