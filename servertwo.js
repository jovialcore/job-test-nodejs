// const Redis = require('ioredis');

// const pub = new Redis();

// const channel = 'garageDoor';

// const sleep = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

// async function main() {
//     console.log('Started garage door publisher...')
//     // Sleep 4 seconds and then publish garage door "opened" event.
//     await sleep(4);
//     pub.publish(channel, 'opened');

//     await sleep(7);
//     pub.publish(channel, 'closed');
//     pub.disconnect();
// }

// main();

const express = require("express")
const redis = require("redis")
const subscriber = redis.createClient()
const app = express()
subscriber.on("message", (channel, message) => {
  console.log("Received data :" + message)
})
app.get("/", (req, res) => {
  res.send("subscriber two")
})
subscriber.subscribe("user-notify")
app.listen(3007, () => {
  console.log("server is listening to port 3007")
})