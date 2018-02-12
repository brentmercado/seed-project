const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');   // allows us to use the unique validator

const UserSchema = new Schema({
   firstName: {type: String, required: true},
   lastName: {type: String, required: true},
   password: {type: String, required: true},
   email: {type: String, required: true, unique: true},
   messages: [{
      type: Schema.Types.ObjectId,
      ref: 'Message'
   }]
});

// allows us to use the unique validator
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', UserSchema);
