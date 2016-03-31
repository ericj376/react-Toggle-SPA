var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FishSchema = new Schema({
  name: { type:String, unique: true },
  color: String,
  people_eater: Boolean,
  length: String,
  img: String,
});

module.exports = mongoose.model('Fish', FishSchema);
