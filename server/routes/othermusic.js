const router = require('express').Router();
let OtherMusic = require('../models/othermusic.model');

router.route('/').get((req, res) => {
	OtherMusic.find()
		.then(otherMusic => res.json(otherMusic))
		.catch(err => res.status(400).json("Error: "  + err));
});

router.route('/').post((req, res) => {
	const title = req.body.title;
	const artist = req.body.artist;
	const link = req.body.link;

	const newOtherMusic = new OtherMusic({ title, artist, link });

	newOtherMusic.save()
		.then(() => res.json("Posted successfully!"))
		.catch(err => res.json("Error: " + err));
});

module.exports = router;