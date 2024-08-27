const mongoose = require('mongoose')
const myschema = new mongoose.Schema
({
    name: 
    {
        type: String,
        required: true
    },
    section: 
    {
        type: String,
        required: true
    },
    placementoffered: 
   {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('models',myschema)
