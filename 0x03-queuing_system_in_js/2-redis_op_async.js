import { redis } from 'kue';
import { createClient, print} from 'redis';
import { promisify } from 'util'

const client = createClient();

client.on('error', err => console.log('Redis client not connected to the server:', err));

const getAsync = promisify(client.get).bind(client);


const setNewSchool = (shoolName, value) => {
    client.set(shoolName, value, print);
} 
    
const displaySchoolValue = async (schoolName) => {
    console.log(await getAsync(schoolName))
  };

async function main (params) {
    await displaySchoolValue('Holberton');
    setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
}

client.on('connect', async () => {
    console.log('Redis client connected to the server');
    await main();
});
