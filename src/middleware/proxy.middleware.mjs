import { createProxyMiddleware } from "http-proxy-middleware"

export default createProxyMiddleware({
    target: "http://127.0.0.1:3000/api",
    changeOrigin: true
})