const express = require('express');
const app = express()
const port = 3000
const router = require('./routes');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
