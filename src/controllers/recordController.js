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
      Record ? res.send({ status: "record retrieved successfully", data: Record }) : res.send({ status: "record doesn't exists"})
    } catch (error) {
      next(error);
    }
  };

  const updateOneRecord = async (req, res, next) => {
    const {record, workout} = req.body;
    const {recordId} = req.params;
    try {
      const recordUpdated = await recordService.updateOneRecord(recordId ,record, workout);
      if(recordUpdated){
        res.send({ status: "record updated successfully", data: recordUpdated });
      }else{
        res.send({ status: "record doesn't exist" });
      }
    } catch (error) {
      next(error);
    }
  };
  
  const deleteOneRecord = async (req, res, next) => {
    const {recordId} = req.params;
    try {
      const recordDeleted = await recordService.deleteOneRecord(recordId);
      if(recordDeleted){
        res.send({ status: "record deleted successfully", data: recordDeleted });
      }else{
        res.send({ status: "record doesn't exist" });
      }
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    getAllRecords,
    getRecordForWorkout,
    createNewRecord,
    updateOneRecord,
    deleteOneRecord,
    getOneRecord
  };