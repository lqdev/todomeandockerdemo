var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    text: String,
    completed: {type:Boolean,default:false}
});

module.exports = mongoose.model('Todo',TodoSchema);