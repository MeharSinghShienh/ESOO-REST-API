import express from "express";
import data from "../data";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const { PORT = 3000} = process.env;

app.use(bodyParser.json()).use(cors());

//Add the GET requests here

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
