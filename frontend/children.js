const mongoose  = require("mongoose");
const {Schema } = mongoose;

const student = new Schema({
    title:String,
    author:String
});

exports.studio = mongoose.model('children',student);