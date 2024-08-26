import express from "express";
import { middlewareCheckOrigin } from "../middleware/middleware.check-origin";
import { getAllReplies } from "../controllers/replies.controllers";

const app = express();

app.use(middlewareCheckOrigin);
app.get("/", getAllReplies);

app.get("/", (req, res) => {
  res.send("Hello From Replies Services!");
});

app.listen(3002, () => console.log("Listening on port 3002"));
