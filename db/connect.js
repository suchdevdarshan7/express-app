const mongoose = require('mongoose')

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/natours');
    console.log(`Mongo Db Connected Successfully!`)
}
module.exports = connectDB;