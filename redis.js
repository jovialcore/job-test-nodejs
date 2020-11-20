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
app.get("/", (req, res) => {
  res.send("Subscriber One")
})
app.listen(3006, () => {
  console.log("server is listening to port 3006")
})