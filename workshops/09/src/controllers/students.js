import StudentModel from '../models/students.js';

const StudentsController = {
  create: async (req, res) => {
    try {
      const { fullName, birthDate, cohort, enrolled } = req.body;
      const newStudent = new StudentModel({
        fullName,
        birthDate,
        cohort,
        enrolled,
      });
      const studentCreated = await newStudent.save();
      res.status(201).json({
        allOK: true,
        message: 'Student created successfully',
        data: studentCreated,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error creating student',
        data: error.message,
      });
    }
  },
  readAll: async (req, res) => {
    try {
      const students = await StudentModel.find();
      res.status(200).json({
        allOK: true,
        message: 'All students retrieved successfully',
        data: students,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error retrieving students',
        data: error.message,
      });
    }
  },
  readOne: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await StudentModel.findById(id);
      if (!student) {
        res.status(404).json({
          allOK: false,
          message: `Student with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Student with ID ${id} retrieved successfully`,
        data: student,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error, retrieving student ',
        data: error.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { fullName, birthDate, cohort, enrolled } = req.body;
      const studentUpdated = await StudentModel.findByIdAndUpdate(id, {
        fullName,
        birthDate,
        cohort,
        enrolled,
      });
      if (!studentUpdated) {
        res.status(404).json({
          allOK: false,
          message: `Student with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Student with ID ${id} updated successfully`,
        data: studentUpdated,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error updating student',
        data: error.message,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const studentDeleted = await StudentModel.findByIdAndDelete(id);
      if (!studentDeleted) {
        res.status(404).json({
          allOK: false,
          message: `Student with ID ${id} not found`,
          data: null,
        });
      }
      res.status(200).json({
        allOK: true,
        message: `Student with ID ${id} deleted successfully`,
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        allOK: false,
        message: 'Error deleting student',
        data: error.message,
      });
    }
  },
};

export default StudentsController;
