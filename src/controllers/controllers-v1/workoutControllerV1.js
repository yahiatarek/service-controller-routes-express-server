const workoutServiceV1 = require("../../services/services-v1/workoutsServicesV1");

  const getAllWorkouts = async (req, res) => {
    const {mode} = req.query;
    try {
      const allWorkouts = await workoutServiceV1.getAllWorkouts({ mode });
      res.send({ status: "OK", data: allWorkouts });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const getOneWorkout = (req, res) => {
    const workout = workoutServiceV1.getOneWorkout();
    res.send("Get an existing workout");
  };
  
  const createNewWorkout = async (req, res) => {
    const { body } = req;
    if (
      !body.name ||
      !body.mode ||
      !body.equipment ||
      !body.exercises ||
      !body.trainerTips
    ) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      })
      return;
    }
    const newWorkout = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips,
    };
    try {
      const createdWorkout = await workoutServiceV1.createNewWorkout(newWorkout);
      res.status(201).send({ status: "OK", data: createdWorkout });
    } catch (error) {res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const updateOneRecord = (req, res) => {
    const updatedWorkout = workoutServiceV1.updateOneRecord();
    res.send("Update an existing workout");
  };
  
  const deleteOneWorkout = (req, res) => {
    workoutServiceV1.deleteOneWorkout();
    res.send("Delete an existing workout");
  };

  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneRecord,
    deleteOneWorkout,
  };