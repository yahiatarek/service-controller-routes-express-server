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
/**
 * @openapi
 * /api/v1/workouts/:workoutId:
 *    get:
 *     tags:
 *       - one Workout
 *     parameters:
 *       - in: path
 *         workoutId: 456j9bbb-608c-49a7-a004-66305ad41234
 *         schema:
 *           type: string
 *         description: One workout
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
router.get("/:workoutId", workoutControllerV1.getOneWorkout);
/**
 * @openapi
 * /api/v1/workouts:
 *    post:
 *     tags:
 *       - create Workout
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
router.post("/", workoutControllerV1.createNewWorkout);
/**
 * @openapi
 * /api/v1/workouts/:workoutId:
 *    get:
 *     tags:
 *       - update one workout
 *     parameters:
 *       - in: path
 *         workoutId: 456j9bbb-608c-49a7-a004-66305ad41234
 *         schema:
 *           type: string
 *         description: One workout
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
router.patch("/:workoutId", workoutControllerV1.updateOneRecord);
/**
 * @openapi
 * /api/v1/workouts/:workoutId:
 *    get:
 *     tags:
 *       - one workout
 *     parameters:
 *       - in: path
 *         workoutId: 456j9bbb-608c-49a7-a004-66305ad41234
 *         schema:
 *           type: string
 *         description: One workout
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
router.delete("/:workoutId", workoutControllerV1.deleteOneWorkout);

module.exports = router;