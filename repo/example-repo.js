// --- example-repo.js ---
// • This is an example on how a simple mongoose Schema should be created
// • Mongoose is used to make communication with MongoDB easy and simple
// -----------------------------------------------------------------------------

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// • Create Schema. This will be used later to define model fields (db columns)
const ExampleSchema = new Schema({
  title: String,
  content: String
})

// • Created Model below will help us to work with MongoDB easily.
var ExampleModel = mongoose.model('Example', ExampleSchema)

// • Export Model
module.exports = ExampleModel
