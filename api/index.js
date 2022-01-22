require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan');
const helmet = require('helmet');

// ROUTER
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const postRouter = require('./routes/postRouter')

// APP
const app = express();


// CONNECTION
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to mongoDB');
}).catch(err => {
  console.log(err);
})


// MIDDLEWARE
app.use(express.json()) // body parser
app.use(helmet())
app.use(morgan('common'));

app.get('/api/v1', (req, res) => {
  res.send('API is running')
})

// USE ROUTE
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/posts', postRouter);

// LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Backend Server is Running On:' + PORT);
})