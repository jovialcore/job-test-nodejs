// const redis = require('redis');

// const client = redis.createClient(); //this will eventuall create the redis clien for us
// //lest check if we have succesfully conetec to the redis client
// const http = require('http');
// client.on('connect', ()=> {
// 			console.log('Redis client is connected sussessfully');
// });

// client.on('error', (err) => {

// 		console.log('conneted on on succesfuly');
// });

const express = require("express")
const redis = require("redis")
const subscriber = redis.createClient()
const app = express()
subscriber.on("message", (channel, message) => {
  console.log("Received data :" + message)
})
subscriber.subscribe("user-notify")
app.get("/events", (req, res) => {
  res.send("Subscriber One published..check your ")
})
app.listen(8000, () => {
  console.log("Your server is on port 8000")
})