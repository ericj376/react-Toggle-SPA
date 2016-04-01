var React = require('react');
var FishForm = require('./FishForm');

var FishFormData = React.createClass({
  getInitialState: function() {
    return {
      fishName: null,
      color: null,
      length: null,
      peopleEater: null,
      img: null
    }
  },
  onNameChange: function(e){
    this.setState({ fishName: e.target.value })
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
       name: this.state.fishName,
       color: this.state.color,
       length: this.state.length,
       people_eater: this.state.peopleEater,
       img: this.state.img,
     };
    var self = this;
      $.ajax( {
      url: '/api/fish',
      method: 'POST',
      data: fishData 
    }).done(function(data) {
      self.loadAllFishFromServer();
    }).fail(function(err) {
      console.log(err);
      alert("Create Fish Failed!");
      self.props.toggleActiveComp('fish');
    });
    this.setState({
      name: '',
      color: '',
      length: '',
      img: ''
    });
  },
  render: function() {
    return (<FishForm
          createNewFish={this.createNewFish}
          fishName={this.state.fishName}
          color={this.state.color}
          length={this.state.length}
          peopleEater={this.state.people_eater} 
          img={this.state.img}
       onNameChange={ this.onNameChange }
       onColorChange={ this.onColorChange }
       onLengthChange={ this.onLengthChange }
       onPeopleEaterChange={ this.onPeopleEaterChange }
       onImgChange={ this.onImgChange }/>
       )
  }
});


module.exports = FishFormData;