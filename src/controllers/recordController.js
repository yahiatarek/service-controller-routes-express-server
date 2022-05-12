const recordService = require("../services/recordService");

const getAllRecords = async (req, res, next) => {
  const {record} = req.query;
  try {
    const allRecords = await recordService.getAllRecords({ record });
    res.send({ status: "OK", data: allRecords });
  } catch (error) {
    next(error)
  }
};
  
  const getRecordForWorkout = async(req, res, next) => {
    const {params: { workoutId }} = req
    try {
      const Record = await recordService.getRecordForWorkout(workoutId);
      res.send({ status: "OK", data: Record });
    } catch (error) {
      next(error);
    }
  };
  
  const createNewRecord = async (req, res, next) => {
    const { body } = req;
    if (
      !body.record ||
      !body.workout
    ) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'record', 'workout'",
        },
      })
      return;
    }
    const newRecord = {
      record: body.record,
      workout: body.workout
    };
    try {
      const createdRecord = await recordService.createNewRecord(newRecord);
      res.status(201).send({ status: "OK", data: createdRecord });
    } catch (error) {
      next(error)
    }
  };
  
  const getOneRecord = async(req, res, next) => {
    const {params: { recordId }} = req
    try {
      const Record = await recordService.getOneRecord(recordId);
      res.send({ status: "record retrieved successfully", data: Record });
    } catch (error) {
      next(error);
    }
  };

  const updateOneRecord = (req, res, next) => {
    const updatedRecord = recordService.updateOneRecord();
    res.send("Update an existing Record");
  };
  
  const deleteOneRecord = (req, res, next) => {
    recordService.deleteOneRecord();
    res.send("Delete an existing Record");
  };

  module.exports = {
    getAllRecords,
    getRecordForWorkout,
    createNewRecord,
    updateOneRecord,
    deleteOneRecord,
    getOneRecord
  };