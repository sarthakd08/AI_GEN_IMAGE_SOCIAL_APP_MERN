


import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser'
import connectDB from "./MongoDB/connect.js";
import dalleRoutes from './Routes/dalleRoutes.js';
import postRoutes from './Routes/postRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Add middlewares
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
// app.use(express.json)  // This is making server load and load in browser so commenting it for now

// Add Routes
app.get('/', async (req, res) => {
    res.send('Hello From index')
})

// Add Project Routes 
app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)


//Start Server
const startServer = () => {

    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {console.log('Server Has Started on PORT 8080')});

    } catch(e) {
        console.log(e) 
    }


}

startServer();
