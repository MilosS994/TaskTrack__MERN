import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    // If user does not exist
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw Error;
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};
