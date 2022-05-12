const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/CrossfitApp');
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });

const workoutsSchema = Schema({
  name: {
    type: String,
    required: false
  },
  mode: {
    type: String,
    required: false
  },
  equipment: {
    type: Array,
    required: false
  },
  exercises: {
    type: Array,
    required: false
  },
  trainerTips: {
    type: Array,
    required: false
  },
});

const recordsSchema = Schema({
    workout: {
      type: String,
      required: true
    },
    record: {
      type: String,
      required: true
    }
  });

const workouts = mongoose.model("workouts", workoutsSchema);
/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */
const records = mongoose.model("records", recordsSchema);
/**
 * @openapi
 * components:
 *   schemas:
 *     Record:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         workout: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         record:
 *           type: string
 *           example: 168 reps
 */
module.exports = {workouts, records}