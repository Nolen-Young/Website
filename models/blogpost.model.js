const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	date: { type: Date, default: Date.now }
},
{
	timestamps:true
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;