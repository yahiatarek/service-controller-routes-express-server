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

const updateOneRecord = (recordId, record, workout)=>{
  return recordsFromDB.updateOneRecord(recordId, record, workout);
}

const deleteOneRecord = (recordId)=>{
  return recordsFromDB.deleteOneRecord(recordId);
}

module.exports = {
  deleteOneRecord,
  updateOneRecord,
  getOneRecord,
  getRecordForWorkout,
  getAllRecords,
  createNewRecord
}
