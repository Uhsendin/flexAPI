const exercises = require('./exerciseData.js');


const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const bodyParts = Object.keys(exercises);

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/random', (req, res) => {
  res.sendFile(__dirname + '/public/random.html');
});

app.get('/docs', (req, res) => {
    res.sendFile(__dirname + '/public/docs.html')
})

app.get('/api/all', (req, res) => {
    res.json(exercises)
})

app.get('/api/random', (req, res) => {
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

app.get('/api/bodyParts', (req, res) => {
  res.json(bodyParts)
})

app.get('/api/exercises', (req, res) => {
  const list = []
    for (const muscleGroup in exercises) {
      const muscleExercises = exercises[muscleGroup]

      for (const exercise of muscleExercises) {
        list.push(exercise.name)
      }
    }
    res.json(list)
  
    
})
app.get('/api/:bodyPart', (req, res) => {
  let bodyPartReq = req.params.bodyPart
    if (bodyParts.includes(bodyPartReq)) {
      res.json(exercises[bodyPartReq])
    } else {
      res.status(404).json({ error: 'Body part not found'})
    }

})


app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
