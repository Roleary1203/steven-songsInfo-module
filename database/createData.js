const faker = require('faker');
const fs = require('fs');
const csv = require("fast-csv");

//run this file using npm run create

let createId = 0;
const data = [];
console.log('generating data.....')
//makes 10 million datas
console.time('data generated in')
for (let i = 0; i <= 10000000; i++) {
  createId++
  const song = {
    plays: faker.random.number(),
    likes: faker.random.number(),
    reposts: faker.random.number(),
    description: faker.lorem.sentence(),
    artist: faker.internet.userName(),
    artist_followers: faker.random.number(),
    artist_tracks: faker.random.number(),
    

  }
  data.push(song)
}
console.log(data.length)
console.timeEnd('data generated in')
console.log('creating csv file....')
console.time('file created in')
//creates csv file using data
var ws = fs.createWriteStream("data.csv");
csv
   .write(data, {headers: true})
   .pipe(ws)
    ws.on("finish", () => console.timeEnd('file created in'))



