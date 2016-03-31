var React = require('react');

var FishForm = React.createClass({
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
  handleFormSubmit: function(e){
    e.preventDefault();
    var fishData = {
       name: this.state.fishName,
       color: this.state.color,
       length: this.state.length,
       people_eater: this.state.peopleEater,
       img: this.state.img,
     };

    this.props.createNewFish(fishData);

    this.setState({
      name: '',
      color: '',
      length: '',
      img: ''
    });
  },
  render: function() {
    return (
      <div>
      <div className="container form_fish">
      <form onSubmit={ this.handleFormSubmit }>
        <h3> Enter New Fish </h3>
        <fieldset className="form-group">
          <label>name</label>
          <input onChange={this.onNameChange} value={this.state.fishName} type="text" className="form-group"/>
        </fieldset>
        <fieldset className="form-group">
          <label>color</label>
          <input onChange={this.onColorChange} value={this.state.color} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>length</label>
          <input onChange={this.onLengthChange} value={this.state.length} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleSelect1">eats people?</label>
          <select onChange={this.onPeopleEaterChange} className="form-control">
          <option>Please Choose</option>
          <option value={ true }>yes</option>
          <option value={ false }>no</option>
          </select>
        </fieldset>
        <fieldset className="form-group">
          <label>img src</label>
          <input onChange={this.onImgChange} value={this.state.img} type="text" className="form-control"/>
        </fieldset>
        <button className="btn btn-secondary-outline" type="submit">Submit</button>
      </form>
      </div>
      </div>
      )
  }
});

module.exports = FishForm;

