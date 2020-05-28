const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myMusicSchema = new Schema({
	title: { type: String, required: true },
	artist: { type: String, required: true },
	link: { type: String, required: true }
},
{
	timestamps:false
});

const MyMusic = mongoose.model('BlogPost', myMusicSchema);

module.exports = MyMusic;