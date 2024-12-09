import express from "express"
import startServer from "./helpers/startServer.mjs"

export const app = express();
startServer();

app.use(express.json());