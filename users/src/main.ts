import express from "express";
import { middlewareCheckOrigin } from "../middleware/middleware.check-origin";
import { getAllUser } from "../controllers/users.controller";

const app = express();

// middleware
app.use(middlewareCheckOrigin);

app.get("/", getAllUser);
app.get("/", (req, res) => {
  res.send("Hello from Users Services!");
});

app.listen(3000);

console.log("Listening on port 3000");
