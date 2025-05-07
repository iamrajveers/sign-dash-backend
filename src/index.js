import express from "express";   // express js frame work of node js with help we build Api 
import dotenv from 'dotenv'; // dotenv we  can we add senstive info env file
const app = express();   // create the express app
dotenv.config() // load .env veriables

const port =  process.env.PORT || 3000;   // set the port

app.get('/' , (req, res) => {    // create route
res.status(200).send("Hello World")
})

app.listen(port, () => {    // start server
    console.log(`Server is running on ${port}`);
})

