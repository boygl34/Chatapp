import ioClient from 'socket.io-client';
const ENDPOINT = 'https://chatapp-ek0.pages.dev/';

const socket = ioClient(ENDPOINT);

export const io = socket;
console.log("connect");