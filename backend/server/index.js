const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const students = require('./routes/api/students');

app.use('/api/students', students);

const port = process.env.PORT || 4000; // Currently avbl. port or 4000

app.listen(port, () => console.log(`Server started on port ${port}`));
