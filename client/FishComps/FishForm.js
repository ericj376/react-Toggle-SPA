var React = require('react');


  
function FishForm(props){
    return (
      <div>
      <div className="container form_fish">
      <form onSubmit={ props.createNewFish }>
        <h3> Enter New Fish </h3>
        <fieldset className="form-group">
          <label>name</label>
          <input onChange={props.onNameChange} value={props.fishName} type="text" className="form-group"/>
        </fieldset>
        <fieldset className="form-group">
          <label>color</label>
          <input onChange={props.onColorChange} value={props.color} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>length</label>
          <input onChange={props.onLengthChange} value={props.length} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleSelect1">eats people?</label>
          <select onChange={props.onPeopleEaterChange} className="form-control">
          <option>Please Choose</option>
          <option value={ true }>yes</option>
          <option value={ false }>no</option>
          </select>
        </fieldset>
        <fieldset className="form-group">
          <label>img src</label>
          <input onChange={props.onImgChange} value={props.img} type="text" className="form-control"/>
        </fieldset>
        <button className="btn btn-secondary-outline" type="submit">Submit</button>
      </form>
      </div>
      </div>
      )
  }

module.exports = FishForm;

