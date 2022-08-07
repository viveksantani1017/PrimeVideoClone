const asyncHandler = require("express-async-handler");
const Media = require("../models/mediaModel");

//@desc get all media
const getAllMedia = asyncHandler(async (req, res) => {
  const response = await Media.find();
  res.status(200).json(response);
});

//@desc update media
const updateMedia = asyncHandler(async (req, res) => {
  const { data } = req.body;
  const media = await Media.findById(req.params.id);
  if (!media) {
    res.status(404).json({ message: "Media Not Found" });
  }
  if (!data) {
    res.json({ message: "Set Data" });
  } else {
    const response = await Media.findByIdAndUpdate(req.params.id,req.body.data,{new:true});
    res.status(200).json(response)
  }
});
//@desc delete media
const delelteMedia = asyncHandler(async(req,res)=>{
    const media = await Media.findById(req.params.id);
  if (!media) {
    res.status(404).json({ message: "Media Not Found" });
  }
  await media.remove(req.params.id)
  res.status(200).json({message:'Media Deleted'})
})
//@desc get all media
const getMediaByType = asyncHandler(async (req, res) => {
  const { type } = req.body;
  const response = await Media.find({ type: type });
  res.json(response);
});

//@desc insert media
const setMedia = asyncHandler(async (req, res) => {
  const { data } = req.body;
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
  res.json(response);
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

module.exports = {
  getAllMedia,
  setMedia,
  getFilteredMedia,
  getMediaByType,
  updateMedia,
  delelteMedia
};
