const express = require('express');
const router = express.Router();
const workoutControllerV1 = require('../../controllers/controllers-v1/workoutControllerV1');

/**
 * @openapi
 * /api/v1/workouts:
 *    get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/", workoutControllerV1.getAllWorkouts);

router.get("/:workoutId", workoutControllerV1.getOneWorkout);

router.post("/", workoutControllerV1.createNewWorkout);

router.patch("/:workoutId", workoutControllerV1.updateOneWorkout);

router.delete("/:workoutId", workoutControllerV1.deleteOneWorkout);

module.exports = router;