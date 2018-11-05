var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
var UserModel = mongoose.model('User', userSchema);
export default UserModel;