import express, { json } from "express";
import router from "./routes/api.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded());

app.use(router)

app.listen(port,() =>{
    console.log(`Server running at https://localhost:${port}`)
});