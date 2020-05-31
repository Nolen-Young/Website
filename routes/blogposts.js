const router = require("express").Router();
let BlogPost = require("../models/blogpost.model");

router.route("/").get((req, res) => {
	BlogPost.find()
		.then((blogPosts) => res.json(blogPosts))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
	const title = req.body.title;
	const content = req.body.content;

	const newBlogPost = new BlogPost({ title, content });

	newBlogPost
		.save()
		.then(() => res.json("Posted successfully"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
