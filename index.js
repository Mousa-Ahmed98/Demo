const express = require("express");
const taskRouter = require("./routes/taskRouter.js");
const loggerMiddleWare = require("./middlewares/loggerMiddleWare.js")
const app = express();

app.use(express.json())
app.use(loggerMiddleWare);

// app.get("/api/v1", (req, res)=>{
//     res.send("We will retrn all tasks")
// })

// app.post("/api/v1/tasks", (req, res)=>{
//     res.send("We will create a task")
// })

// app.patch("/api/v1/tasks", (req, res)=>{
//     res.send("We will update a task")
// })

// app.delete("/api/v1/tasks", (req, res)=>{
//     res.send("We will delete a task")
// })

app.use("/api/v1/tasks", taskRouter);
app.listen(3000, ()=>{
    console.log("running with express on port 3000");
})