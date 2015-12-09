var React = require('react');
var Slides = require('./Slides');
var Pagination = require('./Pagination');
var Controls = require('./Controls');

var Slideshow = React.createClass({
	getInitialState: function() {
	    return {
	    	currentSlide: 0,
	    	data: this.props.data
	    };
	},
	toggleNext: function() {
    var current = this.state.currentSlide;
    var next = current + 4;
    if (next > this.props.data.length - 1) {
      next = 0;
    }
    this.setState({
    	currentSlide: next,
    	data: this.props.data
    });
  },
  togglePrev: function() {
    var current = this.state.currentSlide;
    var prev = current - 4;
    if (prev < 0) {
      prev = this.props.data.length - 1;
    }
    // state.currentSlide = prev;
    // render(state);
    this.setState({
    	currentSlide: prev,
    	data: this.props.data
    });
  },
  toggleSlide: function(id) {
    // console.log('toggle');
    // state.currentSlide = id;
    // render(state);
    this.setState({
    	currentSlide: id
    });
  },
  render: function() {
  	var prev = this.togglePrev;
  	var next = this.toggleNext;
  	var slide = this.toggleSlide;
    return (
      <div className="slideshow">
        <Slides data={this.state.data} currentSlide={this.state.currentSlide} />
        <Pagination data={this.props.data} currentSlide={this.state.currentSlide} toggleSlide={slide}/>
        <Controls togglePrev={prev} toggleNext={next} />
      </div>
    );
  }
});

module.exports = Slideshow;