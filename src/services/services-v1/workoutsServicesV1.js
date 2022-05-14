const workoutsFromDB = require('../../database/workouts');

const getAllWorkouts = ({mode}) => {
  return workoutsFromDB.getAllWorkouts({mode});
}

const getOneWorkout = () => {
  return
}

const createNewWorkout = (newWorkout) => {
  return workoutsFromDB.createNewWorkout(newWorkout);
}

const updateOneRecord = () => {
  return
}

const deleteOneWorkout = () => {
  return
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneRecord,
  deleteOneWorkout,
}
