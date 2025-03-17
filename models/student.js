
import mongoose, { Types } from "mongoose";

export const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required: true,
    },
    number:{
        type:String,
        required: true,
    }

})

 const student=mongoose.model("student",studentSchema);
 export default student;