const router = require('express').Router();
let MyMusic = require('../models/mymusic.model');

router.route('/').get((req, res) => {
	MyMusic.find()
		.then(myMusic => res.json(myMusic))
		.catch(err => res.status(400).json("Error: "  + err));
});

router.route('/').post((req, res) => {
	const title = req.body.title;
	const artist = req.body.artist;
	const link = req.body.link;

	const newMyMusic = new MyMusic({ title, artist, link });

	newMyMusic.save()
		.then(() => res.json("Posted successfully!"))
		.catch(err => res.json("Error: " + err));
});

module.exports = router;