var React = require('react');
var classNames = require('classnames');

/* Slide component is a child component of SlideShow
 * classNames has been used to accomodate multiple dynamic class names
 */

var Slide = React.createClass({
  render: function() {
    var classes = classNames({
      'slide': "true",
      'slide--active': this.props.active,
      'item': "item"
    });
    
    return (
      <li className={classes}>
      <a href ={this.props.url}>
        <img src={this.props.imagePath} alt={this.props.imageAlt} />
       </a>
        <a href ={this.props.url}>
          <h3 className="title">{this.props.title}</h3>
        </a>
        <p>{this.props.text}</p>
      </li>
    );
  }
});

module.exports = Slide;
