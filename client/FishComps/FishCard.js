var React = require('react');

var FishCard = React.createClass({
  render: function() {
    return (
      <div className="card card-size">
        <img className="card-img-top fish-img" 
        src={ this.props.img } alt="some fish"/>
        <div className="card-block card-flex">
          <h4 className="card-title">{ this.props.name }</h4>
          <a href="#" className="btn btn-primary">GO</a>
        </div>
      </div>
      )
  }
});

module.exports = FishCard;