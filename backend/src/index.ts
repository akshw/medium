import { log } from "console";
import express from "express";

const app: express.Application = express();
const port: number = 3000;

app.post("/api/v1/user/signup", (req, res) => {
  console.log("hii");
});

app.post("/api/v1/user/signin", (req, res) => {
  console.log("hii1");
});

app.post("/api/v1/blog", (req, res) => {
  console.log("hi2");
});

app.put("/api/v1/blog", (req, res) => {
  console.log("hi3");
});

app.get("/api/v1/blog/:id", (req, res) => {
  console.log("hi4");
});

app.get("/api/v1/blog/bulk", (req, res) => {
  console.log("hi5");
});

app.listen(port, () => {
  console.log("running");
});
