import bcrypt from 'bcryptjs';
import UserModel from '../models/users.js';
import { getToken } from '../utils/token.js';

const UsersController = {
  register: async (req, res) => {
    try {
      const { name, email, password, image } = req.body;
      const encryptedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        name,
        email,
        password: encryptedPassword,
        image,
      });
      const userRegistered = await newUser.save();
      res.status(201).json({
        allOK: true,
        message: 'User registered successfully.',
        data: userRegistered,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error registering user.',
        data: error.message,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userFound = await UserModel.findOne({ email: username });
      if (!userFound) {
        res.status(401).json({
          allOK: false,
          message: 'Unauthorized.',
          data: null,
        });
      } else {
        const validPassword = await bcrypt.compare(
          password,
          userFound.password
        );
        if (validPassword) {
          const token = await getToken({
            id: userFound._id,
            name: userFound.name,
          });
          if (token) {
            res.status(200).json({
              allOK: true,
              message: 'Welcome!',
              data: token,
            });
          } else {
            res.status(200).json({
              allOK: false,
              message: 'An error occurred, please try again.',
              data: null,
            });
          }
        } else {
          res.status(401).json({
            allOK: false,
            message: 'Unauthorized.',
            data: null,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error registering user.',
        data: error.message,
      });
    }
  },
};

export default UsersController;
