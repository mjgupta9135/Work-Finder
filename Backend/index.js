import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
