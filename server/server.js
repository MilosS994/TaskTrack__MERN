import express from "express";
import { PORT } from "./src/config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("This server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
