const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true }//,
	//date: { type: Date, required:true}
},
{
	timestamps:true
});

const BlogPost = mongoose.model('Post', blogPostSchema);

module.exports = BlogPost;