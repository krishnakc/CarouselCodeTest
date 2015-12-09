var React = require('react');
var Slides = require('./Slides');
var Pagination = require('./Pagination');
var Controls = require('./Controls');

var Slideshow = React.createClass({
  render: function() {
    return (
      <div className="slideshow">
        <Slides data={this.props.data} />
        <Pagination data={this.props.data} currentSlide={this.props.currentSlide}/>
        <Controls />
      </div>
    );
  }
});

module.exports = Slideshow;