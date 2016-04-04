var React = require('react');
var Loader = require('../Loader')
var FishList = require('./FishList');

var FishListData = React.createClass({
  
  getInitialState: function(){
    return {
      allFish: null
    }
  },

  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },

  deleteFish(id) {
    var self= this;
    if( confirm("Do you really want to delete this fish?") ){
      $.ajax({
      url: '/api/fish/one_fish/' + id,
      method: 'DELETE'
    }).done(function() {
      alert('Fish was deleted');
      self.loadAllFishFromServer();
      self.context.sendNotification('Deleted Fish!!!!!!');
      })
    }
  },

  loadAllFishFromServer: function() {
    $.ajax({
      url: '/api/fish' ,
      method: 'GET'
    }).done(data => this.setState({ allFish: data }));

  },

  componentDidMount: function() {
    this.loadAllFishFromServer();
  },

  render: function(){
    return this.state.allFish ? <FishList fishArray={this.state.allFish} getId={ this.props.getId } deleteFish={this.deleteFish} /> : <Loader />;
  },
});

module.exports = FishListData;