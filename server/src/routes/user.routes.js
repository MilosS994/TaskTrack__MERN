import { Router } from "express";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  res.send("GET all users");
});

userRouter.get("/:id", async (req, res) => {
  res.send("GET single user");
});

userRouter.post("/", async (req, res) => {
  res.send("POST new user");
});

userRouter.put("/:id", async (req, res) => {
  res.send("UPDATE user");
});

userRouter.delete("/:id", async (req, res) => {
  res.send("DELETE user");
});

export default userRouter;
