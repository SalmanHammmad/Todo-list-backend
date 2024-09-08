import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({


    taskName: {
        type: String
    },
    taskDescription: {
        type: String
    },
    taskStatus: {
        type: String
    }
});

const Task = mongoose.model('Task', taskSchema);
export default Task;