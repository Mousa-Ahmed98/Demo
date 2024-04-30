const fs = require("fs");
const path = require("path");

const tasksFilePath = path.join(__dirname, "db", "db.json");

// Read and parse the JSON data directly
let tasks = [];
try {
    const tasksData = fs.readFileSync("./db/db.json", "utf8");
    tasks = JSON.parse(tasksData);
    console.log(tasks);
} catch (error) {
    console.error("Error reading or parsing JSON file:", error);
}

function deleteTask(req, res) {
    const id = req.params.id;
        console.log(id);
        let newTasks = tasks.filter(t => t["Id"] != id);
        // fs.writeFile("./db/db.json", JSON.stringify(""), (err) => {
        //     if (err) console.log(err.message);
        // });

        fs.writeFile("./db/db.json", JSON.stringify(newTasks), (err) => {
            if (err) console.log(err.message);
        });
        res.status(200).json({
            status: "Success",
            data: "Removed successfully"
        });
}

function updateTask(req, res) {
    const updatedTask = { ...req.body };
    const id = req.params.id;
        let unUpdatedTasks = tasks.filter(t => t["Id"] != id);
        if(unUpdatedTasks.length == tasks.length){
            res.status(200).json({
                status: "Failed",
                data: "Task does not exist"
            });
        }
        unUpdatedTasks.push(updatedTask);
        // fs.writeFile("./db/db.json", JSON.stringify(""), (err) => {
        //     if (err) console.log(err.message);
        // });

        fs.writeFile("./db/db.json", JSON.stringify(unUpdatedTasks), (err) => {
            if (err) console.log(err.message);
        });
        res.status(200).json({
            status: "Success",
            data: "Updated successfully"
        });

}

function addTask(req, res) {
    const task = { ...req.body };
    tasks.push(task);

    // Write updated tasks back to the file
    fs.writeFile("./db/db.json", JSON.stringify(tasks), (err) => {
        if (err) console.log(err.message);
    });

    res.status(200).json({ 
        status: "Success",
        data: task
    });
}

function getAllTasks(req, res) {
    
    res.status(200).json({
        status: "Success",
        data: tasks
    })
}

function getOneTask(req, res) {
        const id = req.params.id;
        console.log(id);
        let targetTask = tasks.find(t => t["Id"] == id)
        res.status(200).json({
            status: "Success",
            data: targetTask
        });
}

module.exports = { getAllTasks, getOneTask, addTask, updateTask, deleteTask };
