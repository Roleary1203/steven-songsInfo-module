const Sequelize = require('sequelize');

// setup connection
const db = new Sequelize('democloud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// test connection
db.authenticate()
  .then(() => {
    console.log('db connection success!');
  })
  .catch(err => {
    console.log('NO db connection!', err);
  });

// songsinfo table schema
const SongsInfo = db.define(
  'SongsInfo',
  {
    plays: { type: Sequelize.INTEGER },
    likes: { type: Sequelize.INTEGER },
    reposts: { type: Sequelize.INTEGER },
    description: { type: Sequelize.STRING },
    artist: { type: Sequelize.STRING },
    artist_followers: { type: Sequelize.INTEGER },
    artist_tracks: { type: Sequelize.INTEGER }
  },
  {
    timestamps: false
  }
);

// applies SongsInfo table to democloud db
db.sync();

// query to read all from db
const read = () => {
  SongsInfo.findAll()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log('unable to read all from db', err);
    });
};

module.exports = { SongsInfo, read };
