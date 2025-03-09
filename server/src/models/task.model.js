import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 99,
    },
    description: {
      type: String,
      trim: true,
      default: "No description",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      default: "low",
    },
  },
  { timestamps: true }
);

taskSchema.index({ status: 1 });
taskSchema.index({ priority: 1 });

const Task = mongoose.model("Task", taskSchema);

export default Task;
