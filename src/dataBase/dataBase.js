const {MongoClient} = require("mongodb");

const URL = 'mongodb://localhost:27017/';
const client = new MongoClient(URL);

async function start() {
    try {
        await client.connect();
        console.log("connected");
        const db = await client.db('users');
        const collection = await db.collection('user');

        const users = await collection.find().toArray();
        console.log(users);
    } catch (e) {
        console.log(e.message);
    }
}

start();
