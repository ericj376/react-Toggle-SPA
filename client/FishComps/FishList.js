var React = require('react');
var FishCard = require('./FishCard');

function FishList(props){
    //MAP THROUGH OUR DATA AND PASS IT TO FISH CARD;
    var allFish = props.fishArray.map(item =>{
      return (
        <FishCard
          getId={ props.getId }
          id={ item._id} 
          name={ item.name } 
          color={ item.color }
          people_eater={ item.people_eater }
          length={ item.length }
          img={ item.img } />
        );
    });

    return (
      <div className="fish-flex">
        { allFish }
      </div>
      )
  
};

FishList.propTypes = {
  fishArray: React.PropTypes.array.isRequired
};

module.exports = FishList;
