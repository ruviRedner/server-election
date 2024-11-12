import {io} from "../app"

io.on("connection",(client)=>{
    console.log(`[socket.io]New Connection ${client.id} `);
    
})