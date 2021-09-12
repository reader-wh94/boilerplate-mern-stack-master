const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.OnjectId,
    ref: User,
  },
  title: {
    type: String,
    maxlength: 50
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    defualt: 0
  },
  images: {
    type: Array,
    default: []
  },
  sold: {
    type: Number,
    maxlength: 100,
    default: 0
  },
  view: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }