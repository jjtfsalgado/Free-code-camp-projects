var React = require('react');
import marked from 'marked';

import MarkConverted from './markConverted';
import MarkDown from './markdown';


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

var MarkApp = React.createClass({
  getInitialState: function() {
    return {
      text:'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a\nline break\n\nText attributes *italic*, **bold**,\n `monospace`, ~~strikethrough~~ .\n\nShopping list:\n   * apples\n   * oranges\n   * pears\n\nNumbered list:\n   1. apples\n   2. oranges\n   3. pears\n\nThe rain---not the reign---in\nSpain.\n\n*[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };
  },
  getMarkdownText: function() {
    var markText = marked(this.state.text);
    return {__html: markText};
  },
  handleChange: function(e) {
    this.setState({
      text: e.target.value
    })
  },
  render:function () {
    return(
      <div className="container">
        <MarkDown text={this.state.text} onChange={this.handleChange}/>
        <MarkConverted text={this.state.text} onChange={this.getMarkdownText()}/>
      </div>
    );
  }
});

module.exports = MarkApp;
