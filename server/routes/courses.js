const router = require("express").Router();
let Course = require("../models/course.model");

router.route("/").get((req, res) => {
	Course.find()
		.then((project) => res.json(project))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
	const title = req.body.title;

	const newCourse = new Course({ title });

	newCourse
		.save()
		.then(() => res.json("Posted successfully"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
