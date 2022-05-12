const recordsFromDB = require('../database/Record');

const getAllRecords = (record) => {
  return recordsFromDB.getAllRecords(record);
}

const getRecordForWorkout = (workoutId) => {
  return recordsFromDB.getRecordForWorkout(workoutId);
}

const createNewRecord = (newRecord) => {
  return recordsFromDB.createNewRecord(newRecord);
}

const getOneRecord = (recordId)=>{
  return recordsFromDB.getOneRecord(recordId);
}
module.exports = {
  getOneRecord,
  getRecordForWorkout,
  getAllRecords,
  createNewRecord
}
