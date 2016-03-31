var React = require('react');
var FishListData = require('./FishListData');
var FishForm = require('./FishForm');

// FishBox
//  Toggler
//  FishList
//    FishCard
//  FishForm

var Toggler = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="btn-group" data-toggle="buttons">
            <button className="btn btn-primary-outline" onClick={this.props.toggleActiveComp.bind(null, 'fish')}> Fish Display </button>
            <button className="btn btn-primary-outline" onClick={this.props.toggleActiveComp.bind(null, 'form')}> Modify Fish </button>
        </div>
      </div>
      )
  }
});


var FishBox = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'fish'
      }
  },
  showComp: function() {
    /* THIS FUNCTION RENDERS ONE COMPONENT 
    BASED ON activeComp State*/
    if(this.state.activeComponent === 'fish'){
      return <FishListData/> 
    } else if (this.state.activeComponent === 'form') {
      return <FishForm createNewFish={ this.props.createNewFish }/>
    } else {
      throw new Error("Invalid activeComponent", this.state.activeComponent)
    }
  },
  toggleActiveComp: function(name) {
    this.setState({activeComponent: name})
  },
  render: function() {
    return (
      <div>
      <Toggler toggleActiveComp={this.toggleActiveComp}/>
      { this.showComp() }
      </div> 

      )
  }
});

module.exports = FishBox;