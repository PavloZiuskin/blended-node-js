require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const {DB_URI, PORT = 3030} = process.env;
(async ()=>{
    await mongoose.connect(DB_URI);
    console.log("database connection established successfuly");
    app.listen(PORT, ()=>{console.log("server is up and running on port 3030")});
})();


