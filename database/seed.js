const faker = require('faker');
const db = require('./index.js');
const fs = require('fs');
const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const csv = require("fast-csv")


const data = [];
console.time('data generated')
for (let i = 0; i <= 10000000; i++) {
  const song = {
    plays: faker.random.number(),
    likes: faker.random.number(),
    reposts: faker.random.number(),
    description: faker.lorem.sentence(),
    artist: faker.internet.userName(),
    artist_followers: faker.random.number(),
    artist_tracks: faker.random.number()
  }
  data.push(song)
}
console.log(data.length)
console.timeEnd()
/*
CSVToJSON().fromFile("./data.csv").then(source => {
    console.log('SOURCE IS', source)
    source.push({
        "plays": "34890",
        "likes": "12345",
        "reposts": "4322",
        "description": "workplzlikewowwowowowo",
        "artist": "JimmyBoy",
        "artist_followers": "1232",
        "artist_tracks": "323"
    });


var csv = JSONToCSV(data, { fields: 
  ["plays", "likes", "reposts", "description",
  "artist","artist_followers","artist_tracks" ]});
fs.writeFileSync("./data.csv", csv);
//});


/*
db.SongsInfo.bulkCreate(data)
.then(res => res.json()) 
.catch(error => console.log(error))
*/

var ws = fs.createWriteStream("data.csv");
csv
   .write(data, {headers: true})
   .pipe(ws);