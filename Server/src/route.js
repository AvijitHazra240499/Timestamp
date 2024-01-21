const { timestamp } = require("./controller/timestamp");
const express=require('express')
const route=express.Router()


route.post('/calculate-difference', timestamp)
module.exports =route