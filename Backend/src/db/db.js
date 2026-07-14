const mongoose = require('mongoose');

async function connectDb(){

    await mongoose.connect(process.env.MONGO_URI)

    console.log("sucessfully connected  to database");
}

module.exports = connectDb