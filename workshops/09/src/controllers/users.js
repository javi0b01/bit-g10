import bcrypt from 'bcryptjs';
import UserModel from '../models/users.js';

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
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userFound = await UserModel.findOne({ email: username });
      console.log('userFound:', userFound);
      if (!userFound) {
        res.status(401).json({
          allOK: false,
          message: 'Unauthorized',
          data: null,
        });
      } else {
        const validPassword = await bcrypt.compare(
          password,
          userFound.password
        );

        if (validPassword) {
          res.status(200).json({
            allOK: true,
            message: 'User found successfully | Welcome!',
            data: 'FAKE TOKEN', // TODO: return a real token
          });
        } else {
          res.status(401).json({
            allOK: false,
            message: 'Unauthorized',
            data: null,
          });
        }
      }
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
