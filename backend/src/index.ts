import express, { Express, Request, Response } from "express";

const path = require("path");
const app: Express = express();
const port = 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));

app.listen(port, () => {
  console.log(`${port}번에서 실행이 되었습니다.`);
});
