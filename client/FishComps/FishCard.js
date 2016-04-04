var React = require('react');

function FishCard(props){
    return (
      <div className="card card-size">
        <img className="card-img-top fish-img" 
        src={ props.img } alt="some fish"/>
        <div className="card-block card-flex">
          <h4 className="card-title">{ props.name }</h4>
          <button onClick={ props.getId.bind(null, 'showOne', props.id) } className="btn btn-primary">GO</button>
          <button onClick={ props.getId.bind(null, 'editOne', props.id) } className="btn btn-primary">EDIT</button>
          <button onClick={ props.deleteFish.bind(null, props.id) } className="btn btn-primary">DELETE</button>
        </div>
      </div>
      )
};

module.exports = FishCard;