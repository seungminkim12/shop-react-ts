import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//config
dotenv.config();

const path = require("path");
const app: Express = express();
const port = 4000;

//cors middleware
app.use(cors());
// json parsing middleware
app.use(express.json());

// process.env.MONGO_URI! or process.env.MONGO_URI as string
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.post("/", (req: Request, res: Response) => {
  res.json(req.body);
});

app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));

app.listen(port, () => {
  console.log(`${port}번에서 실행이 되었습니다.`);
});
