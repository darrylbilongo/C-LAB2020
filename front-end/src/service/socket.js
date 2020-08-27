import io from "socket.io-client";
export const socket = io.connnect({
    transports: [ 'websocket', 'polling' ]
})

