// --- example-route.js ---
// • This is an example on how a simple route should be created
// • Routes are imported on index.js file and are used to declare our simple
// API endpoints.
// • Remember, this is a simple template and I will not complicate things but
// is a good practice to create one file on which you'll import all routes
// and import that file later on index.js. This way, index.js file will be
// more clean and simple to read.
// -----------------------------------------------------------------------------

const Example = require('./../../repo/example-repo')
const express = require('express')
const router = express.Router()

// • Declaring GET method
router.get('/', function (req, res) {
  // • Use mongoose to get all `examples` in our database
  // • How we got this find() method you'll ask? Well, that comes from our
  // declared mongoose model.
  Example.find(function (err, examples) {
    // • If there is an error, send the error. nothing after res.send(err)
    // will execute
    if (err) { res.send(err) }

    // • Return all `examples` in JSON format
    res.json(examples) // return all examples in JSON format
  })
})

// • Declaring POST method
router.post('/', function (req, res) {
  // • Create and save `example` on MongoDB.
  // • We get information form request body
  Example.create({
    title: req.body.title,
    content: req.body.content
  }, function (err, examples) {
    if (err) { res.send(err) }

    // • Get and return all the `examples` after you create another
    Example.find(function (err, examples) {
      if (err) { res.send(err) }
      res.json(examples)
    })
  })
})

// • Export router to use it on other modules
module.exports = router
