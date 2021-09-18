const express=  require('express');
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose');
const app  = express()
const server= require('http').createServer(app);
const io = require('socket.io')(server,{cors:{origin:"*"}})
const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.wpffu.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
const cors  = require('cors');
const fileUpload = require('express-fileupload');
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser=  require('body-parser');
app.use(bodyParser.json())
const userRoutes = require('./routes/user');
app.use(fileUpload());
app.use('/user',userRoutes)


io.on('connection',(socket)=>{
    console.log(socket);
    socket.on('message',(payload)=>{
        console.log("payload",payload);
        socket.emit('message',payload);
    })
})



mongoose
.connect(MONGO_URI).then(result=>{
    server.listen(process.env.PORT,()=>{
       console.log(`Server running on-${process.env.PORT}`)
    })
})



