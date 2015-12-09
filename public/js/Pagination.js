var React = require('react');
var Pager = require('./Pager');

var Pagination = React.createClass({
  render: function() {
    var self = this;
    var paginationNodes = this.props.data.map(function (paginationNode, index) {
      if (index % 4 === 0)
      return (
        <Pager id={index} key={index} title={paginationNode.title} selected={self.props.currentSlide} />
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
