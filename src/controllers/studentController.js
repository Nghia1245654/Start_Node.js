import Student from "../models/studentModel.js";
import * as studentService from "../services/studentService.js";
export const create = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res
      .status(201)
      .json({ message: "Student created successfully", student: student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAll = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getStudentDetail = async (req, res) => {
    try {
        const student = await studentService.getStudentById(req.params.studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteStudent = async (req, res) => {
    try {
       await studentService.deleteStudentById(req.params.studentId, req.body);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateStudent = async (req, res) => {
    try {
        const student = await studentService.updateStudentById(req.params.studentId, req.body);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully', student: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};