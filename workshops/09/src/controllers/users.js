import UserModel from '../models/users.js';

const UsersController = {
  register: async (req, res) => {
    try {
      const { name, email, password, image } = req.body;
      const newUser = new UserModel({
        name,
        email,
        password,
        image,
      });
      const userRegistered = await newUser.save();
      res.status(201).json({
        allOK: true,
        message: 'User registered successfully',
        data: userRegistered,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error registering user',
        data: error.message,
      });
    }
  },
};

export default UsersController;
