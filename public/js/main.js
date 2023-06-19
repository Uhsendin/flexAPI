const bodyPart = document.querySelector('.bodypart');
const nameElm = document.querySelector('.name');
const muscles = document.querySelector('.muscles')
const des = document.querySelector('.description');

document.addEventListener('DOMContentLoaded', async () => {
  {
    const res = await fetch('http://localhost:8000/api/random');
    const data = await res.json();
    bodyPart.textContent = data.bodyPart
    nameElm.textContent = data.exercise.name
    des.textContent = data.exercise.instructions
    muscles.textContent = data.exercise.targetedMuscles.join(" ")
  }
});

document.querySelector(".btn-wrapper button").addEventListener("click", async () => {
    const res = await fetch('http://localhost:8000/api/random');
    const data = await res.json();
    bodyPart.textContent = data.bodyPart
    nameElm.textContent = data.exercise.name
    des.textContent = data.exercise.instructions
    muscles.textContent = data.exercise.targetedMuscles.join(" ")
})

