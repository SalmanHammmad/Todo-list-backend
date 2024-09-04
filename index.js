import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';



    
dotenv.config();
connectDB();



const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Task Manager API');
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});




