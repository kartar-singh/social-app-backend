require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = 'mongodb://localhost:27017';
mongoose.set('strictQuery', true);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

// const routes = require('./routes/routes');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');

// app.use('/api', routes)
app.use('/user',userRouter)
app.use('/auth',authRouter)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})