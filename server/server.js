const express = require('express')
const mongoose = require('mongoose')
const app = express()
const User = require("./userDetails")
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/reservation-database', {
}).then(() => {
  console.log('Connected to MongoDB...');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.post('/add-user', async (req, res) => {
  try {
      const { name, id, address, duration } = req.body;
      console.log(req.body)
      const result = await User.create({
        "name": name,
        "id": id,
        "address": address,
        "duration": duration
      })
      console.log(result)
      res.send('User added successfully');
  } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).send('Error adding user');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});