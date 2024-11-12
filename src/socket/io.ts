import { Socket } from "socket.io";


export const handelShackConnection = (client:Socket) => {
    console.log(`[socket.io]New Connection ${client.id} `);
}
    
    
