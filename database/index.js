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
const songsinfo = db.define(
  'songsinfo',
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

// applies songsinfo table to democloud db
db.sync({ force: true })
  .then(() => {
    console.log(`songsinfo table created :)`);
  })
  .catch(err => {
    console.log('songsinfo table not created!', err);
  });

// query to read all from db
const read = songsinfo.find({}).complete((err, data) => {
  console.log(data);
});
