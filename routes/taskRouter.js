const express = require("express");
const router = express.Router();
const taskController = require('../controllers/taskController');
// router.get("/", taskController.getAllTasks())

// router.get("/:id", taskController.getOneTask())

// router.post("/", taskController.addTask(req, res))

// router.patch("/:id", taskController.updateTask())

// router.delete("/", taskController.deleteTask())

router.route("/").post(taskController.addTask).get(taskController.getAllTasks);
router.route("/:id").get(taskController.getOneTask).patch(taskController.updateTask).delete(taskController.deleteTask);

module.exports = router;

