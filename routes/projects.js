const router = require("express").Router();
let Project = require("../models/project.model");

router.route("/").get((req, res) => {
	Project.find()
		.then((project) => res.json(project))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
	const title = req.body.title;
	const description = req.body.description;
	const link = req.body.link;

	const newProject = new Project({ title, description, link });

	newProject
		.save()
		.then(() => res.json("Posted successfully"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
