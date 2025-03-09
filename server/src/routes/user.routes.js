import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import { authorize } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

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
