const express = require("express");
const router = express.Router();

const {getTasks, getTaskByID, createTask, deleteTask, updateTask} = require("../controllers/taskController");

router.get("/",getTasks);
router.get("/:id",getTaskById);
router.post("/",createTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask);

module.exports = router;