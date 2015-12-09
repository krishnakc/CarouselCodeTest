/*
 * Author : Krishna
 * Date : 08-12-2015
 * Last modified : 09-12-2015
 */

var React = require('react');
var Slide = require('./Slide');
var state = require('./state');

var Slides = React.createClass({
  render: function() {
    var currentSlide = this.props.currentSlide;
    var slidesNodes = this.props.data.map(function (slideNode, index) {

    var isActive = currentSlide <= index && (currentSlide + 4) > index;
      return (
        <Slide active={isActive} key={index} imagePath={slideNode.img} imageAlt={slideNode.alt} title={slideNode.title} text={slideNode.content} action={slideNode.url} />
      );
    });
    return (
      <ul className="items">
        {slidesNodes}
      </ul>
    );
  }
});

module.exports = Slides;