var React = require('react');


var Beer = React.createClass({
  render: function() {
    return (
  <div className="jumbotron">
        <h1 className="display-3">What about beer!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>          
      </div>
     )
  }
});

module.exports = Beer;