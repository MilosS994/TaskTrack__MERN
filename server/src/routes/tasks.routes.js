import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import {
  getUserTasks,
  getUserTask,
  createUserTask,
  updateUserTask,
  deleteUserTask,
} from "../controllers/task.controller.js";

const tasksRouter = Router();

tasksRouter.get("/", authorize, getUserTasks);

tasksRouter.get("/:id", authorize, getUserTask);

tasksRouter.post("/", authorize, createUserTask);

tasksRouter.put("/:id", authorize, updateUserTask);

tasksRouter.delete("/:id", authorize, deleteUserTask);

export default tasksRouter;
