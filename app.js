const express = require('express');
const app = express()
const port = 3000
const userRouter = require('./routes/user');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
