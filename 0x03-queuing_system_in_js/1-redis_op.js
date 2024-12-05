import { createClient, print } from 'redis';

const client = createClient();

client.on('connect', stream => console.log('Redis client connected to the server'));

client.on('error', err => console.log('Redis client not connected to the server:', err));

const setNewSchool = (shoolName, value) => {
    client.set(shoolName, value, print);
    // redis.print
};

const displaySchoolValue = (schoolName) => {
    client.get(schoolName, (err, reply) => {
        if (err) {console.error(err)};
        console.log(reply)
    });
    // redis.print
};


displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

// client.connect;
// client.quit();