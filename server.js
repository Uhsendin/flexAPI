const exercises = require('./exerciseData.js');

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/random', (req, res) => {
  res.sendFile(__dirname + '/public/random.html');
});

app.get('/api/random', (req, res) => {
  const bodyParts = Object.keys(exercises);
  const randomBodyPart =
    bodyParts[Math.floor(Math.random() * bodyParts.length)];
  const exercisesForSelectedBodyPart = exercises[randomBodyPart];
  const randomExerciseIndex = Math.floor(
    Math.random() * exercisesForSelectedBodyPart.length
  );
  const randomExercise = exercisesForSelectedBodyPart[randomExerciseIndex];

  const generatedRandomExercise = randomExercise;

  res.json({ bodyPart: randomBodyPart, exercise: generatedRandomExercise });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
