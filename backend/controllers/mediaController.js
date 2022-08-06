const asyncHandler = require('express-async-handler')
const Media = require('../models/mediaModel')

//@desc get all media
const getAllMedia =  asyncHandler( async(req,res)=>{
    const response =await Media.find()
    res.status(200).json(response)
})

//@desc get all media
const getMediaByType =  asyncHandler( async(req,res)=>{
    const {type} = req.body
    const response =await Media.find({'type':type})
    res.json(response)
})


//@desc insert media
const setMedia =  asyncHandler( async(req,res)=>{
    const {data} = req.body
    const response = await Media.create({
        name:data.name,
        type:data.type,
        releaseDate:data.releaseDate,
        rating:data.rating,
        description:data.description,
        coverImg:data.coverImg,
        cast:data.cast,
        director:data.director,
        lang:data.lang,
        genre:data.genre,
        isOscarNominee:data.isOscarNominee,
        isOscarWinner:data.isOscarWinner
    })
    res.json(response)
})
//@desc get filtered media by type
const getFilteredMedia =  asyncHandler( async(req,res)=>{
    const {lang,genre} = req.body
    let searchQuery 
    if(lang == ''){
        searchQuery={'genre':{ $regex: genre}}
    }
    else if(genre == ''){
        searchQuery={'lang':lang}
    }
    else{
        searchQuery={'lang':lang,'genre':[{ $regex: genre}]}
    }

    const response =await Media.find(searchQuery)
    res.status(200).json(response)
})

module.exports = {
    getAllMedia,
    setMedia,
    getFilteredMedia,
    getMediaByType
}
