import express from "express";
import { middlewareCheckOrigin } from "../middleware/middleware.check-origin";
import { getThreads } from "../controllers/threads.controller";

const app = express();
app.use(middlewareCheckOrigin);
app.get("/", getThreads);
app.get("/", (req, res) => {
  res.send("Hello From Threads Services!");
});

app.listen(3001, () => console.log("Listening on port 3001"));
