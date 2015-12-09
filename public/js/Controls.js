var React = require('react');
var actions = require('./actions');
var pagination = require('./Pagination');
var Controls = React.createClass({
  togglePrev: function() {
    actions.togglePrev();
  },
  toggleNext: function() {
    actions.toggleNext();
  },
  render: function() {
    return (
      <div className="controls">
        <ul>
          <li><span className="nav" id="leftNav" onClick={this.togglePrev}></span></li>
          {pagination}
          <li><span className="nav" id="rightNav" onClick={this.toggleNext}></span></li>
        </ul>
      </div>
    );
  }
});

module.exports = Controls;