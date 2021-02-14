'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserAdminSchema = Schema({
    email: String,
    password: String,
    role: String
});

// UserSchema.methods.toJSON = function() {
//     var obj = this.toObject();
//     delete obj.password;

//     return obj;
// }

module.exports = mongoose.model('User', UserAdminSchema)