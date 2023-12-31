import { io } from 'socket.io-client';

const socket = io(); // Connect to the server using the default URL (same origin)

export default socket;