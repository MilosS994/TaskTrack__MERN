import express from "express";
import connectDB from "./src/database/mongodb.js";
import { PORT } from "./src/config/env.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This server is running!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  await connectDB();
});
