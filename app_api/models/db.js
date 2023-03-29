const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const con_url = `mongodb://${host}/travlr`;

const {seed} = require('./seed');

// Register models
require('./trips');

mongoose.connection.on('connected', () => console.log('CONNECTED!'));
mongoose.connection.on('error', () => console.log(err));
mongoose.connection.on('disconnected', () => console.log('DISCONNECTED!'));

mongoose.set('strictQuery', false);

// Kill MongoDB connections before exiting app
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected due to ${msg}`);
        callback();
    });
}
process.once('SIGUSR2', () =>
    gracefulShutdown('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () =>
    gracefulShutdown('app termination', () => process.exit(0)));

async function main() {
    await mongoose.connect(con_url);
    await seed(); // Seed the database after connection
}

main().catch(console.log);