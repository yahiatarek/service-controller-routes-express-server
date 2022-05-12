const schemas = require('./db-connect-and-schema');

const getAllRecords = async ({ record }) => {
  try {
    const records = await schemas.records.find({});
    if (record) {
      return records.filter((record)=>{
        record.record.toLowerCase().includes(record);
      });
    }
    return await schemas.records.find({})
  } catch (error) {
    throw { status: 500, message: error }
  }
}

const getOneRecord = async ({ recordId }) => {
  try {
    const record = await schemas.records.findOne({_id: recordId});
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
}

const getRecordForWorkout = async (workoutId) => {
    try {
      const record = await schemas.records.findOne({workout: workoutId});
      if (!record) {
        throw {
          status: 400,
          message: `Can't find workout with the id '${workoutId}'`,
        };
      }
      return record;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
  };

  const createNewRecord = async (newRecord)=> {
    try {
      const recordAlreadyAdded = await schemas.records.findOne({
        workout: newRecord.workout,
        record: newRecord.record
      });
      if(recordAlreadyAdded){
        return "record already added"
      }
      return await schemas.records.insertMany(newRecord);
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
  };

module.exports = {
  getRecordForWorkout,
  getAllRecords,
  createNewRecord,
  getOneRecord
};