

const app  = require('express')()
const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer,{
    cors:{
        Origin:"*"
    }
})
const PORT =3007
const users = {}

io.on("connection",(socket)=>{
console.log(socket.id);

socket.on('disconnect',()=>{
    console.log('disconnected')
    for(let user in users){
        if(users[user]===socket.id){
            delete users[user]
        }
    }
    io.emit('all_users',users)
})
socket.on('new_user',(username)=>{
    console.log('server:'+username);
    users[username] =socket.id;

    io.emit('all_users',users)
})
socket.on('send_message',(data)=>{
    console.log(data);

    const socketId = users[data.receiver];
    console.log(socketId)
    io.to(socketId).emit('new_message',data)
})

})


httpServer.listen(PORT,()=>{
    console.log('server started')
})