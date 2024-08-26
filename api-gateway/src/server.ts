import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/users", createProxyMiddleware({ target: "http://localhost:3000" }));

app.use("/threads", createProxyMiddleware({ target: "http://localhost:3001" }));

app.use("/replies", createProxyMiddleware({ target: "http://localhost:3002" }));

app.listen(8010, () => {
  console.log("API Gateway berjalan di port 8010");
});
