var React = require('react');
var Pager = require('./Pager');

/* Pagination component
 * Component controls navigation
 */

var Pagination = React.createClass({
  render: function() {
    var self = this;
    var paginationNodes = this.props.data.map(function (paginationNode, index) {
      var slide = self.props.toggleSlide.bind(null, index);
      if (index % 4 === 0)
      return (
        <Pager id={index} key={index} title={paginationNode.title} selected={self.props.currentSlide} toggleSlide={slide}/>
      );
    });
    return (
      <div className="controls">
      <ul className="pagination buttons">
        {paginationNodes}
      </ul>
      </div>
    );
  }
});

module.exports = Pagination;
