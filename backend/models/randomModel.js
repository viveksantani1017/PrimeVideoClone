const mongoose = require('mongoose')

const newSchema = mongoose.Schema({
    newcolumn:{
        type:String
    }
})

module.exports = mongoose.model('New',newSchema)