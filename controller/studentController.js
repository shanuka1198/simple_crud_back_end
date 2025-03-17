
import student from "../models/student.js"

export function createStudent(req,res){

    console.log("Request Body:", req.body);

    const { name, address, number } = req.body;

    const newStudent=new student({name,address,number});

    newStudent.save()
    .then(() => {
        res.json({ message: "student created" });
    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });


}

export function deleteStudent(req, res) {
    const name = req.params.name;

    student.findOneAndDelete({ name: name })
        .then((result) => {
            if (result) {
                res.json({ message: "Delete successful", deletedStudent: result });
            } else {
                res.status(404).json({ message: "Student not found" });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting student", error: err.message });
        });
}

export function getAllStudents(req, res) {
    student.find()
        .then((students) => {
            res.json({ message: "Students found", data: students }); 
        })
        .catch((err) => {
            res.status(500).json({ message: "Error fetching students", error: err.message });
        });
}

export function updateStudent(req,res){
    const name=req.params.name;

    student.findOneAndUpdate({name:name},req.body,{new:true}).then((student)=>{
        if (!student) {
           
            return res.status(404).json({
                message: "student not found",


            });
        }
        
        res.status(200).json({
            message: "student updated successfully",
        });
    })
    .catch((err) => {
        
        console.error(err);
        res.status(500).json({
            message: "Failed to update student"
        });
            
    })
}


export function getStudentById(req, res) {
    const name = req.params.name;

    student.findOne({ name: name })
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: "No student found" });
            }
            res.status(200).json({ message: "Student found", data: result });
        })
        .catch((err) => {
            res.status(500).json({ message: "Error fetching student", error: err.message });
        });
}

