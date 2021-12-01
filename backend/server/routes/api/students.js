//const { text } = require('body-parser');
const express = require('express');

const mongodb = require('mongodb');

const router = express.Router();

//Get Students
router.get('/', async (req, res) => {
  const students = await loadStudentCollections();
  res.send(await students.find({}).toArray());
});

//Add Students
router.post('/', async (req, res) => {
  const students = await loadStudentCollections();
  await students.insertOne({
    name: req.body.name,
    surname: req.body.surname,
    note: req.body.note,
  });
  res.status(201).send();
});

async function loadStudentCollections() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://ulas:test1234@cluster0.vewon.mongodb.net/task?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  );
  return client.db('task').collection('student_notes');
}

module.exports = router;
