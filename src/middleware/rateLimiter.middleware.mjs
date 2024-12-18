import {rateLimit} from "express-rate-limit";

export default rateLimit({
    windowMs: 60 * 1000,
    limit: 30,
    standardHeaders: true,
    legacyHeaders: false,
    statusCode: 429,
    message: "Too many requests, please try again later."
})