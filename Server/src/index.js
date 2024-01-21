const express = require('express');
const app=express()
const route=require('./route')
const cors = require('cors');
app.use(express.json());

app.use(cors()); 


app.use('/', route);



let PORT = process.env.PORT || 3001
app.listen(PORT, function () {
    console.log(`Express is running on PORT ${PORT}`)
});