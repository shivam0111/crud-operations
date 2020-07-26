const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose') 
const passport = require('passport')
const passportLocal = require('passport-local')
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
const session = require('express-session')

require('dotenv').config();

const app = express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established...");
});

const questionsRouter = require('./Routes/questions');
const answersRouter = require('./Routes/answers');

app.use('/questions', questionsRouter);
app.use('/answers', answersRouter);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}...`)
});
