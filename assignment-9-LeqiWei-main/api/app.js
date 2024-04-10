import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import model from './models/index.js';
import routes from "./routes/index.js";

//create an express app
const app = express();

// connect to db
mongoose.connect("mongodb://localhost:27017/remindersdb", { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);

export default app;