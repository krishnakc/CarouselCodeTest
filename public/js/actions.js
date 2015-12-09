var state = require('./state');
var React = require('react');
var ReactDOM = require('react-dom');
var EmptyMessage = require('./EmptyMessage');
var Slideshow = require('./Slideshow');

function render(state) {
  console.log(React.createElement(Slideshow, {data: state.data, currentSlide: state.currentSlide}));
  ReactDOM.render(
    <Slideshow data={state.data} currentSlide={state.currentSlide}/>,
    document.getElementById('carousel-items')
  );
};

module.exports = {
  toggleNext: function() {
    // console.log("something worked");
    var current = state.currentSlide;
    var next = current + 4;
    if (next > state.data.length - 1) {
      next = 0;
    }
    state.currentSlide = next;
    render(state);
  },
  togglePrev: function() {
    // console.log("something worked");
    var current = state.currentSlide;
    var prev = current - 1;
    if (prev < 0) {
      prev = state.data.length - 1;
    }
    state.currentSlide = prev;
    render(state);
  },
  toggleSlide: function(id) {
    console.log('toggle');
    state.currentSlide = id;
    render(state);
  }
};