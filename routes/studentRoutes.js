
import express from "express";
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from "../controller/studentController.js";

const studentRoutes=express.Router();

studentRoutes.put("/:name",updateStudent)
studentRoutes.post("/",createStudent);
studentRoutes.get("/",getAllStudents);
studentRoutes.delete("/:name",deleteStudent);
studentRoutes.get("/:name",getStudentById);
export default studentRoutes;