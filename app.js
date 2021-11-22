const express = require('express');
const app = express()
const port = 3000
const userRouter = require('./routes/user');
const reflectionRouter = require('./routes/reflection');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRouter);
app.use('/api/v1/reflections', reflectionRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
