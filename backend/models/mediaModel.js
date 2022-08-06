const mongoose = require('mongoose')

const mediaSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Add Media Name"]
    },
    type:{
        type:String,
        required:[true,"Please Add Media type"]
    },
    releaseDate:{
        type:String,
        required:[true,"Please Add Media Release Date"]
    },
    rating:{
        type:String,
        required:[true,"Please Add Media Rating Out Of 10"]
    },
    description:{
        type:String,
        required:[true,"Please Add Media Description"]
    },
    coverImg:{
        type:String,
        required:[true,"Please Add Path To Media Cover Img"]
    },
    cast:{
        type:String,
        required:[true,"Please Add Media Cast"]
    },
    director:{
        type:String,
        required:[true,"Please Add Media Director"]
    },
    lang:{
        type:String,
        required:[true,"Please Add Media type"]
    },
    genre:{
        type:Array,
        required:[true,"Please Add Media type"]
    },
    isOscarNominee:{
        type:Boolean,
        required:[true,"Please Add Media type"],
        default:false
    },
    isOscarWinner:{
        type:Boolean,
        required:[true,"Please Add Media type"],
        default:false
    }
})

module.exports = mongoose.model('Media',mediaSchema)