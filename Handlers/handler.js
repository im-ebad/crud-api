const UserModel = require("../models/userModel.js");

const findAll = async (req, res) => {
  try {
    const user = await UserModel.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

findOne = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, gender } = req.body;
  if (!email && !name && !gender) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }
  const user = new UserModel({
    name: name,
    email: email,
    gender: gender,
  });
  await user
    .save()
    .then((data) => {
      return res.send({
        message: "User created successfully!!",
        user: data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      });
    });
};

destroy = async (req, res) => {
  await UserModel.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `User not found.`,
        });
      } else {
        return res.send({
          message: "User deleted successfully!",
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};

module.exports = {
  createUser,
  findAll,
  findOne,
  destroy,
};
