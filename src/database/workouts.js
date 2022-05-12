const schemas = require('./db-connect-and-schema')

const getAllWorkouts = async ({ mode }) => {
  try {
    const workouts = await schemas.workouts.find({});
    if (mode) {
      return workouts.filter((workout)=>{
        workout.mode.toLowerCase().includes(mode);
      });
    }
    return await schemas.workouts.find({})
  } catch (error) {
    throw { status: 500, message: error }
  }
}

const createNewWorkout = async (newWorkout) => {
  const alreadyAddedWorkout = await schemas.workouts.find({
    name: newWorkout?.name,
    mode: newWorkout?.mode,
  })

  if (alreadyAddedWorkout.length !== 0) {
    return;
  }

  const newWorkoutModel = new workouts(newWorkout)
  await newWorkoutModel.save()
  return newWorkout
}

module.exports = { getAllWorkouts, createNewWorkout }
