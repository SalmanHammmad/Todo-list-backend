import express from 'express';
const router = express.Router();
import { getTasks, createTask, deleteTask, updateTask, getTaskById } from '../controllers/taskController.js';


router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export default router;