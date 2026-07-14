require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/db/db");

const PORT = process.env.PORT || 3000;

connectDb();

app.listen(3000,()=> {
    console.log('server is running in port 3000')
})