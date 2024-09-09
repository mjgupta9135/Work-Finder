import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import connectDB from "./utils/db.js";
import companyRouter from "./routes/company.route.js";
dotenv.config({});
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "https//localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

//apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening on port ${PORT}`);
});
