import Student from '../models/studentModel.js';
export const createStudent = async (studentData) => {
    const createStudent = await Student.create(studentData);
    return createStudent;
};
// lây tât cả ủe trong db
export const getAllStudents = async () => {
    return await Student.find();
};
// lấy user theo id
export const getStudentById = async (studentId) => {
    return await Student.findById(studentId);
};
// update user by id
export const updateStudentById = async (studentId, updateData) => {
    return await Student.findByIdAndUpdate(studentId, updateData, { new: true });
};
//delete user by id
export const deleteStudentById = async (studentId) => {
    return await Student.findByIdAndDelete(studentId);
};