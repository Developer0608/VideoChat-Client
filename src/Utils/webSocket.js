import socketIOClient from "socket.io-client";

export const socket = socketIOClient('http://localhost:3500', {
    transports: [ "websocket" ],
    reconnectionAttempts: 20,
    reconnectionDelay: 5000
});
  
