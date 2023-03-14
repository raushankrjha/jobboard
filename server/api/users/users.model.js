
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {type:String,required:true},
  name: String,
  age: String,
  skills:Array,
},{timestamps:true});
module.exports = mongoose.model('Users', UserSchema);