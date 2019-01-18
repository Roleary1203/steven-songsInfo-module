const mongoose = require('mongoose');
const csv = require("fast-csv")
const fs = require('fs');


mongoose.connect('mongodb://localhost/democloud',{ useNewUrlParser: true } );


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose DB Connected')
});

var SongsInfosSchema = new mongoose.Schema({
	_id: String,
	plays: Number,
	likes: Number,
	reposts: Number,
	description: String,
	artist: String,
	artist_followers: Number,
	artist_tracks: Number,
	isFollowed: Boolean

})

var SongsInfos = mongoose.model('SongsInfos', SongsInfosSchema);

var getData =(id,callback) => {
	SongsInfos.findOne({ _id: id}, (err, results) => {
		err ? callback(err) : callback(results);
	})
}


 module.exports = { SongsInfos, db, mongoose , getData}