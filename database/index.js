var fs = require('fs');
var pg = require('pg');
var copyFrom = require('pg-copy-streams').from;
const connectionString = process.env.DATABASE_URL || "postgres://localhost:5432/democloud"

const client = new pg.Client(connectionString);
console.time()
client.connect(function(err, client, done) {
  var stream = client.query(copyFrom('COPY SongsInfos(plays,likes,reposts,description,artist,artist_followers,artist_tracks) FROM STDIN WITH CSV HEADER'));
  var fileStream = fs.createReadStream('data.csv')
  fileStream.pipe(stream)
  //fileStream.on('error', done);
});
console.timeEnd()

const getData = (id,callback) => {
 client.query(`SELECT * FROM Songsinfos WHERE id = ${id}`, (err, results) => {
 	err ? callback(err) : callback(results);
 }
 	)
}

module.exports = { getData }