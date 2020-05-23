// import
const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // set up express
const port = process.env.PORT || 5000; // grab our port

app.use(cors()); // set up cors
app.use(express.json()); // set up json

const uri = process.env.ATLAS_URI; // get uri form .env
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }); // connect to MongoDB
const connection = mongoose.connection;
connection.once('open', () => { // check connection
	console.log("MongoDB databse connection established.");
});

// routes
const blogPostsRouter = require('./routes/blogposts');
app.use('/blog', blogPostsRouter)

// run
app.listen(port, () => { 
	console.log('Server running on port: ' + port);
});