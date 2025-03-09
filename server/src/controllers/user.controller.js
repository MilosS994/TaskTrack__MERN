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
      throw error;
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, password, email, firstName, lastName } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { username, password, email, firstName, lastName },
      { new: true }
    );

    // If user does not exist
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res
      .status(200)
      .json({ success: true, message: "User updated succesffuly", data: user });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { username, password, email } = req.body;

  try {
    // If there is already a user with the same email or username
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (!existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Username or email already taken" });
    }

    // Create new user
    const newUser = await User.create({ username, password, email });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};
