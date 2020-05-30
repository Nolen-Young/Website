/*****************************************************************************************************************************
 * Author: Nolen Young
 * Desc: Server for my personal web page.
 *****************************************************************************************************************************/

// import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Set up of packages
const app = express(); // set up express
const port = process.env.PORT || 5000; // grab our port
app.use(cors()); // set up cors
app.use(express.json()); // set up json

// set up mongoose connection
const uri = process.env.ATLAS_URI; // get uri form .env
// connect to MongoDB
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB databse connection established.");
});

// set up routes
const blogPostsRouter = require("./routes/blogposts"); // blog routes
app.use("/blog", blogPostsRouter);

const myMusicRouter = require("./routes/mymusic"); // my music routes
app.use("/mymusic", myMusicRouter);

const otherMusicRouter = require("./routes/othermusic");
app.use("/othermusic", otherMusicRouter);

app.get("/", (req, res) => {
	res.send(
		"Nolen Young's personal server. If you want to know how this thing works, ask Nolen, cause no way in hell I am documenting this right now."
	);
});

// run
app.listen(port, () => {
	console.log("Server running on port: " + port);
});
