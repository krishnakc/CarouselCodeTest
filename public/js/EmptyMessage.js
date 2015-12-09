var React = require('react');
/*

Empty message will be shown if data is missing

*/
var EmptyMessage = React.createClass({
  render: function() {
    return (
      <div className="empty-message">No Data Found to build Carousel</div>
    );
  }
});

module.exports = EmptyMessage;