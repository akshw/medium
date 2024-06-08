import { log } from "console";
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app: express.Application = express();

app.get("/api/v1/user/signup", async (req, res) => {
  const body = req.body;

  try {
    await prisma.user.create({
      data: {
        username: body.username,
        password: body.username,
        name: body.name,
      },
    });
    console.log("signed up");
  } catch (e) {
    res.status(411).send("Invalid");
  }
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
  console.log("running....");
});
