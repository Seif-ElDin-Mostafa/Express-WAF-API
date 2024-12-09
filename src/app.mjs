import express from "express"
import startServer from "./helpers/startServer.mjs"

const app = express();
startServer();

app.use(express.json());