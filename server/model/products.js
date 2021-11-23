const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
//   author: ObjectId,
  name: { type: String , required: true, max:[60,'最大50文字までです']},
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingtxt1: String,
  headingtxt2: String,
  headingtxt3: String,
  coverimg: String,

});

module.exports = mongoose.model('Product', ProductSchema)