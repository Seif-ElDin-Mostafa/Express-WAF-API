import express from "express"
import proxyMiddleware from "./middleware/proxy.middleware.mjs"
import rateLimiter from "./middleware/rateLimiter.middleware.mjs"
import ruleCheck from "./middleware/ruleCheck.middleware.mjs"
import startServer from "./helpers/startServer.mjs"

export const app = express();
startServer();

app.use(express.json());
app.use(rateLimiter);
app.use("/api", ruleCheck, proxyMiddleware);