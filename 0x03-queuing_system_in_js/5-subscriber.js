import { createClient, print } from 'redis';

const client = createClient();

client.on('connect', stream => console.log('Redis client connected to the server'));
client.on('error', err => console.log('Redis client not connected to the server:', err));

// create a duplicate of client as each subscriber must connect individually
// const holSub = client.duplicate();
// holSub.connect;
client.subscribe('holberton school channel')
 client.on('message', (err, message) => {
  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
  console.log(message)
}, true)
