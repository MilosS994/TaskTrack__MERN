import { Router } from "express";
import {
  getUsers,
  getUser,
  updateUser,
  createUser,
} from "../controllers/user.controller.js";
import { authorize } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", createUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", async (req, res) => {
  res.send("DELETE user");
});

export default userRouter;
