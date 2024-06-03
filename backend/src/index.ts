import { log } from "console";
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = PrismaClient();
const app: express.Application = express();

app.get("/api/v1/user/signup", async (req, res) => {
  console.log("hii");
  res.status(200).send("hello from signup");

  const body = req.body;
  await prisma.user.create({
    data: {
      username: body.user,
      password: body.password,
      name: body.name,
    },
  });
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

app.listen(3000, () => {
  console.log("running");
});
