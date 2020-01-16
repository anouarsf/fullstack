const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema ({
user : {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user'
},
phonenumber: {
  type: String
},
role: {
  type: String,
  required : true
},
nom: {
  type: String
},
prenom: {
  type: String
},
adresse:{
  type: String
}

});

module.exports = Profile = mongoose.model('profile', ProfileSchema);