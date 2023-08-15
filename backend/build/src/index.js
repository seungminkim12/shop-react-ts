"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
//config
dotenv_1.default.config();
const path = require("path");
const app = (0, express_1.default)();
const port = 4000;
//cors middleware
app.use((0, cors_1.default)());
// json parsing middleware
app.use(express_1.default.json());
// process.env.MONGO_URI! or process.env.MONGO_URI as string
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.post("/", (req, res) => {
    res.json(req.body);
});
app.use("/uploads", express_1.default.static(path.join(__dirname, "../../uploads")));
app.listen(port, () => {
    console.log(`${port}번에서 실행이 되었습니다.`);
});
