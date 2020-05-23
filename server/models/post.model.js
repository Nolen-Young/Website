const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: {
		type: String,
		required:true,
		unique: true,
		time: true
	},
}, {
	timestamps:true
});

const Post = mongoose.model('Post', postSchema);

modeule.export = Post;