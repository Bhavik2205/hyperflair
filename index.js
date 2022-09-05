import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import './node_modules/dotenv/config.js'; 

const app = express();

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//PORT in use
app.listen(process.env.PORT);

//connecting to Database
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log(`Server started successfully on Port: ${process.env.PORT}`)
    })
    .catch((error) => {
        console.error({message: error.message})
    })
