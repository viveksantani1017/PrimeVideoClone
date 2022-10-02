const asyncHandler = require("express-async-handler");
const { db } = require("../models/mediaModel");
const Media = require("../models/mediaModel");

//@desc get all media
const getAllMedia = asyncHandler(async (req, res) => {
  const response = await Media.find();
  res.status(200).json(response);
});
//getOneMedia
const getMedia = asyncHandler(async(req,res)=>{
  const response = await Media.findById(req.body.id)
  if(!response){
    res.status(404).json({message:'No Media Found'})
  }
  else{
    res.status(200).json(response)
  } 
})
//get media details
const getMediadetails = asyncHandler(async(req, res) => {
  const mediaDetails = await Media.findById(req.params.id)
  res.json(mediaDetails)
})
//@desc update media
const updateMedia = asyncHandler(async(req, res) => {
  const { data } = req.body;
  console.log(req.body)
  const media = await Media.findById(req.params.id);
  if (!media) {
      res.status(404).json({ message: "Media Not Found" });
  } else {
      const response = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json({ data: response, messege: "Data Updated" })
  }
});
//@desc delete media
const delelteMedia = asyncHandler(async(req, res) => {
  const media = await Media.findById(req.params.id);
  if (!media) {
      res.status(404).json({ message: "Media Not Found" });
  }
  await media.remove(req.params.id)
  res.status(200).json({ message: 'Media Deleted' })
})
//@desc get all media
const getMediaByType = asyncHandler(async (req, res) => {
  const { type } = req.body;
  const response = await Media.find({ type: type });
  res.json(response);
});

//@desc insert media
const setMedia = asyncHandler(async (req, res) => {
  try {
    const { media } = req.body
    const data = JSON.parse(media)
    const response = await Media.create({
        name: data.name,
        type: data.type,
        releaseDate: data.releaseDate,
        rating: data.rating,
        description: data.description,
        coverImg: data.coverImg,
        cast: data.cast,
        director: data.director,
        lang: data.lang,
        genre: data.genre,
        isOscarNominee: data.isOscarNominee,
        isOscarWinner: data.isOscarWinner,
    });
    res.json({ messege: 'Data Inserted' });
} catch (err) {
    console.log(err)
}
});
//@desc get filtered media by type
const getFilteredMedia = asyncHandler(async (req, res) => {
  const { type, lang, genre } = req.body;
  // console.log(type,genre,lang)
  let searchQuery;
  if (lang == "") {
    searchQuery = { genre: { $regex: genre } };
  } else if (genre == "") {
    searchQuery = { lang: lang };
  } else {
    searchQuery = { lang: lang, genre: [{ $regex: genre }] };
  }
  const response = await Media.find(searchQuery);
  let filteredResponse;
  if (type == "Movie") {
    filteredResponse = response.filter((r) => r.type === "Movie");
  }
  if (type == "Show") {
    filteredResponse = response.filter((r) => r.type == "Show");
    console.log(filteredResponse);
  }
  if (!type) {
    return res.status(200).json(response);
  }
  res.status(200).json(filteredResponse);
});

//@desc search api
const getSearchedMedia = asyncHandler(async(req,res)=>{
  const {searchMedia} = req.body;
  
  // Media.createCollection({cast:"text",genre:"text",lang:"text",type:"text",director:"text",name:"text"})
  // const response = db.collection.find({$text:{$search:searchMedia}})
  
  const response = await Media.find({$or:[{lang: { "$regex": `${searchMedia}`, "$options": "ix" }},{genre: { "$regex": `${searchMedia}`, "$options": "ix" }},{cast: { "$regex": `${searchMedia}`, "$options": "ix" }},{director: { "$regex": `${searchMedia}`, "$options": "ix" }},{name: { "$regex": `${searchMedia}`, "$options": "ix" }}]})
  res.send(response);
})
module.exports = {
  getAllMedia,
  getMediadetails,
  getMedia,
  setMedia,
  getFilteredMedia,
  getMediaByType,
  updateMedia,
  delelteMedia,
  getSearchedMedia
};
