import Task from "../models/task.model.js";

export const getUserTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ author: req.user._id });

    if (!tasks || tasks.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No tasks found" });
    }

    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    next(error);
  }
};

export const getUserTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ _id: id, author: req.user._id });

    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

export const createUserTask = async (req, res, next) => {
  const { title, description, dueDate, priority } = req.body;

  //   If there is no title
  if (!title) {
    const error = new Error("Title is required");
    error.statusCode = 400;
    throw error;
  }

  //   Create new task
  try {
    const task = await Task.create({
      title,
      description,
      author: req.user._id,
      dueDate,
      priority,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};
