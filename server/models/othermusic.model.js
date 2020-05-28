const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const otherMusicSchema = new Schema({
	title: { type: String, required: true },
	artist: { type: String, required: true },
	link: { type: String, required: true }
},
{
	timestamps:false
});

const OtherMusic = mongoose.model('BlogPost', otherMusicSchema);

module.exports = OtherMusic;