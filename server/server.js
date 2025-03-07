import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./src/database/mongodb.js";
import { PORT } from "./src/config/env.js";

import { userRouter } from "./src/routes/user.routes.js";

import errorMiddleware from "./src/middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", tasksRouter);

app.use(errorMiddleware);

app.app.get("/", (req, res) => {
  res.send("This server is running!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  await connectDB();
});
