
const express = require("express")
const redis = require("redis")
const publisher = redis.createClient()
const app = express()
app.get("/", (req, res) => {
  const user = {
    id: "message",
    name: "hello",
  }
  publisher.publish("user-notify", JSON.stringify(user))
  res.send("{ message : hello}")
})
app.listen(3005, () => {
  console.log(`server is listening on PORT 3005`)
})





// const http = require('http');

// const server = http.createServer( (req, res) => {
// 	if (req.url === '/') {
// 	res.write("my name is chidenere");
// 	res.end();	
// }
// 	if (req.url === '/api/courses') {
// 		res.write(JSON.stringify(['hello:', 'world']));
// 		res.end();
// 	}	
// }); 


// server.listen(4000);

// console.log("yes..stuff started running don't you see it");
// const Redis = require('ioredis');

// const redis = new Redis();

// redis.on('message', (channel, message) => {
//     console.log(`Received the following message from ${channel}: ${message}`);
// });

// const channel = 'garageDoor';

// redis.subscribe(channel, (error, count) => {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log(`Subscribed to ${count} channel. Listening for updates on the ${channel} channel.`);
// });