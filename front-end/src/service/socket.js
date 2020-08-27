import io from "socket.io-client";

export const socket = io.connect('https://darrylbilongo.site/clab', {
    // WARNING: in that case, there is no fallback to long-polling
    transports: [ 'websocket' ] // or [ 'websocket', 'polling' ], which is the same thing
})

