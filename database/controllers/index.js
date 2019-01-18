const db = require('../index.js')

exports.getData = (req,res) => {
  let id = req.params.id;
  db.SongsInfos.findOne({ _id: id}, (err, results) => {
    err ? res.send(err) : res.send(results);
  })
}

exports.updateFollowers = (req, res) => {
  console.log(req.body)
  let id = req.body.id
  let num = req.body.num
  db.SongsInfos.findOneAndUpdate({_id: id}, {artist_followers: num }, (err, results) => {
  	err ? res.send(err) : res.send(results);
  })
  db.SongsInfos.findOne({_id: id}, (err, doc) => {
  	err? console.log(err) : doc.isFollowed = !doc.isFollowed;
  	doc.save(err => {if (err)  console.log(err)})
  })
}

