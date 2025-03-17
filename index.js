import studentRoutes from "./routes/studentRoutes.js";
import express from "express";
import mongoose from "mongoose";


const app = express();
app.use(express.json());

const connectionString= "mongodb+srv://shanuka:123@cluster0.tlad3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connectionString).then(
    ()=>{
        console.log("database connect");
    }
).catch(
    ()=>{
        console.log("connection fail");
    }
)

app.use("/api/student",studentRoutes);

app.listen(5001, () => {
    console.log("Server is running on port 5000");
});
