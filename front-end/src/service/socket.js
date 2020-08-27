import io from "socket.io-client";
export const socket = io.connect({
    transports: [ 'websocket', 'polling' ]
  })

