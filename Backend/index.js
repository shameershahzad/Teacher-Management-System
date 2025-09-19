const express = require("express");
const cors = require("cors")
const connectDB = require("./config/db");
const registerRoutes = require("./routes/registerRoutes"); 
const classRoutes = require("./routes/classRoutes")
const studentRoutes = require("./routes/studentRoutes")
const timetableRoutes = require("./routes/timetableRoutes")
const attendanceRoutes = require("./routes/attendanceRoutes")
connectDB();

const app = express();      
app.use(express.json());
app.use(cors());    

app.use("/register",registerRoutes)
app.use("/class",classRoutes)
app.use("/studentData",studentRoutes)
app.use("/times",timetableRoutes)
app.use("/attendance",attendanceRoutes)

const port = 3003;

app.listen(port,() => {
    console.log(`Server is running at port: ${port}`)
})