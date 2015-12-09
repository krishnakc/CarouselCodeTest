/*
* Author : Krishna
* Date : 08-12-2015
* Last modified : 09-12-2015
*/
/*
 Pager component is used to navigate between slides based on unique id
 */
var React = require('react');
var actions = require('./actions');
var classNames = require('classnames');

var Pager = React.createClass({
  toggleSlide: function() {
    // console.log(this.props.id);
    actions.toggleSlide(this.props.id);
  },
  render: function() {
    var classes = classNames({
      'navButtons': "true",
      'selected': this.props.selected === this.props.id
    });
    return (
      <li >
        <a className={classes} onClick={this.props.toggleSlide}></a>
      </li>
    );
  }
});

module.exports = Pager;
