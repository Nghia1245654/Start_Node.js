// routes/studentRoute.js
import express from "express";
import {
  create,
  getAll,
  getStudentDetail,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const studentRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management API
 */

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/StudentInput"
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 student:
 *                   $ref: "#/components/schemas/Student"
 *       500:
 *         $ref: "#/components/responses/ServerError"
 */
studentRouter.post("/", create);

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Student"
 *       500:
 *         $ref: "#/components/responses/ServerError"
 */
studentRouter.get("/", getAll);

/**
 * @swagger
 * /students/{studentId}:
 *   get:
 *     summary: Get detail of one student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student detail
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Student"
 *       404:
 *         $ref: "#/components/responses/NotFound"
 *       500:
 *         $ref: "#/components/responses/ServerError"
 */
studentRouter.get("/:studentId", getStudentDetail);

/**
 * @swagger
 * /students/{studentId}:
 *   put:
 *     summary: Update student data
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/StudentInput"
 *     responses:
 *       200:
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 student:
 *                   $ref: "#/components/schemas/Student"
 *       404:
 *         $ref: "#/components/responses/NotFound"
 *       500:
 *         $ref: "#/components/responses/ServerError"
 */
studentRouter.put("/:studentId", updateStudent);

/**
 * @swagger
 * /students/{studentId}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       500:
 *         $ref: "#/components/responses/ServerError"
 */
studentRouter.delete("/:studentId", deleteStudent);

export default studentRouter;
