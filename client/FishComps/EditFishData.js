var React = require('react');
var EditFishForm = require('./EditFishForm');

var EditFishData = React.createClass({
  getInitialState: function(){
    return {
      name: null,
      color: null,
      length: null,
      people_eater: null,
      img: null,
    }
  },

  loadOneFishFromServer: function() {
    var self = this;
    $.ajax({
      url: '/api/fish/one_fish/' + this.props.id,
      method: 'GET',
    }).done(function(data){
      self.setState({
        name: data.name,
        color: data.color,
        length: data.length,
        people_eater: data.people_eater,
        img: data.img
        })
    })
  },

  componentDidMount: function() {
    this.loadOneFishFromServer();
  },

  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },
  onNameChange: function(e){
    this.setState({ name: e.target.value })
  },
  onColorChange: function(e){
    this.setState({ color: e.target.value })
  },
  onLengthChange: function(e){
    this.setState({ length: e.target.value })
  },
  onPeopleEaterChange: function(e){
    this.setState({ people_eater: e.target.value })
  },
  onImgChange: function(e){
    this.setState({ img: e.target.value })
  },

  createNewFish: function(e) {
    e.preventDefault();
     var fishData = {
       name: this.state.name,
       color: this.state.color,
       length: this.state.length,
       people_eater: this.state.peopleEater,
       img: this.state.img,
     };
    var self = this;
      $.ajax( {
      url: '/api/fish/one_fish/' + this.props.id,
      method: 'PUT',
      data: fishData 
    }).done(function(data) {
      self.props.toggleActiveComp('fish');
      self.context.sendNotification('Edited Fish!!!!!!');
    }).fail(function(err) {
      console.log(err);
      alert("Edit Fish Failed!");
      
    });
    this.setState({
      name: '',
      color: '',
      length: '',
      img: ''
    });
  },

  render: function(){
    return (
      <EditFishForm
      {...this.state}
      createNewFish={this.createNewFish}
      onNameChange={ this.onNameChange }
      onColorChange={ this.onColorChange }
      onLengthChange={ this.onLengthChange }
      onPeopleEaterChange={ this.onPeopleEaterChange }
      onImgChange={ this.onImgChange } />
      )
  }
});


module.exports = EditFishData;