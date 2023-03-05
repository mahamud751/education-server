import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/users.js";
import adminRoute from "./routes/admin.js";
import collegeRoute from "./routes/college.js";
import divisionRoute from "./routes/division.js";
import statesRoute from "./routes/states.js";
import courseRoute from "./routes/course.js";
import examRoute from "./routes/exam.js";
import announcementRoute from "./routes/announcement.js";
import hiringRoute from "./routes/hiring.js";
import notificationRoute from "./routes/notification.js";

import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("successfully connect with mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/user", usersRoute);
app.use("/api/admin", adminRoute);
app.use("/api/college", collegeRoute);
app.use("/api/division", divisionRoute);
app.use("/api/states", statesRoute);
app.use("/api/course", courseRoute);
app.use("/api/exam", examRoute);
app.use("/api/announcement", notificationRoute);
app.use("/api/notification", announcementRoute);
app.use("/api/hiring", hiringRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("connect with backend");
});
