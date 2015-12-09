var React = require('react');

var EmptyMessage = React.createClass({
  render: function() {
    return (
      <div className="empty-message">No Data Found to build Carousel</div>
    );
  }
});

module.exports = EmptyMessage;