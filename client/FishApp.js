var React = require('react');
var FishBox = require('./FishComps/FishBox');
var Loader = require('./Loader');

var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Do you know about fish?</h1>
        <p className="lead">Well... let me tell you about fish!</p>
        <hr className="m-y-2"/>
      </div>
      )
  }
});

var FishApp = React.createClass({
  

  createNewFish: function(fishData) {
    var self = this;

    console.log('in createNewTodo');

    $.ajax( {
      url: '/api/fish',
      method: 'POST',
      data: fishData 
    }).done(function(data) {
      self.loadAllFishFromServer();
    }).fail(function(err) {
      console.log(err);
      alert("Create Fish Failed!");
    });
  },
  render: function() {    
    return (
      <div>
        <Jumbotron />
        <FishBox />
      </div>
    )
    
  }
});

module.exports = FishApp;