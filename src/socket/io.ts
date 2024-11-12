import { Socket } from "socket.io";
import { io } from "../app";


export const handelShackConnection = (client:Socket) => {
    console.log(`[socket.io]New Connection ${client.id} `);
    client.on("disconnect",()=>{
        console.log("Bay Bay user");
        
    })
    client.on("newVote",()=>{
        console.log("[NEW VOTE] in the system")
        io.emit("voteAppend")
    })
    client.on("alert",()=>{
        io.emit("alert")
    })
    
}
    
    
