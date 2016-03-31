var React = require('react');
var Loader = React.createClass({
  render: function(){
    return (
      <div>
        <i className="fa fa-hand-spock-o fa-6 fa-spin myFont center-block"></i>
      </div>
      )
  }
});

module.exports = Loader;