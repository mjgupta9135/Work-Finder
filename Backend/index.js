import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import connectDB from "./utils/db.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.routes.js";
import applicationRouter from "./routes/application.route.js";
import path from "path";
dotenv.config({});
const app = express();

const _dirname = path.resolve();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "https://work-finder-m7mo.onrender.com",
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOption));

//apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening on port ${PORT}`);
});
