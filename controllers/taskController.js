import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try{
    const {id,taskName, taskDescription, taskStatus } = req.body;
    const task = await Task.create({ id, taskName, taskDescription, taskStatus });
    if(!task){
      return res.status(400).json({ message: 'Task not created' });
    }
    res.status(201).json(task);
    
  }catch (error) {
    res.status(500).json({ message: error.message });
}
}
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const deleteTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const updateTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };