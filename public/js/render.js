var React = require('react');
var ReactDOM = require('react-dom');
var EmptyMessage = require('./EmptyMessage');
var Slideshow = require('./Slideshow');

/**
 * @param state will be passed to component
 *
 * Based on data component will be mounted, root component
 */

module.exports = function (state) {
  var hasData = state.data.length > 0;
  var component;
  if (hasData) {
    component = <Slideshow data={state.data} currentSlide={state.currentSlide}/>;
  }
  else {
    component = <EmptyMessage />;
  }
  ReactDOM.render(
    component,
    document.getElementById('carousel-items')
  );
};