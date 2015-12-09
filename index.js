var React = require('react');
var ReactDOM = require('react-dom');
var Slideshow = require('./public/js/Slideshow');
var EmptyMessage = require('./public/js/EmptyMessage');
var state = require('./public/js/state');
var render = require('./public/js/render');
var carouselData = require('./public/js/data');

render(state);

setTimeout(function() {
  state.data = carouselData.carousel.items;
  render(state);
}, 1000);