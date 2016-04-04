var React = require('react');

var EditFishData = React.createClass({
  render: function(){
    return (
      <div className='container'>
      <h3> You Have Found Edit Fish Data </h3>
      <p> Fish ID is: {this.props.id} </p>
      </div>
      )
  }
});


module.exports = EditFishData;