import express from "express"
import rateLimiter from "./middleware/rateLimiter.middleware.mjs"
import startServer from "./helpers/startServer.mjs"

export const app = express();
startServer();

app.use(express.json());
app.use(rateLimiter);

app.get("/", (req, res) => {
    res.send("Hello World");
})