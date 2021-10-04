const { MongoClient } = require("mongodb");

const username = encodeURIComponent(process.env.mongodb_username);
const password = encodeURIComponent(process.env.mongodb_password);
const clusterUrl = `127.0.0.1:${process.env.mongodb_port}`;
const authMechanism = "DEFAULT";
const authSource = 'db_name';

// Replace the following with your MongoDB deployment's connection string.
// const uri = `mongodb://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}&authSource=${authSource}`;
const url = `mongodb://${clusterUrl}`;
let client = new MongoClient(url);
let db;

export default async function() {
	if (db) {
		return db;
	}

	// const client = await MongoClient.connect(url);
	try {
		await client.connect();
		db = await client.db("scores");
		console.log('Connected successfully to database server');
		return db;
	} catch (error) {
		console.log('Error occurred during connection to database server', error);
		return error;
	}
}

async function listDatabases(client){
	const databasesList = await client.db().admin().listDatabases();

	console.log("Databases:");
	databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
