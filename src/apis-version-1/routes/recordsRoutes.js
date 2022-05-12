const express = require('express');
const router = express.Router();
const recordController = require('../../controllers/recordController');

/**
 * @openapi
 * /api/v1/records:
 *    get:
 *     tags:
 *       - Records
 *     parameters:
 *       - in: query
 *         name: record
 *         schema:
 *           type: string
 *         description: The record of a workout
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
 *                     $ref: "#/components/schemas/Record"
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

router.get("/", recordController.getAllRecords);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.get("/:recordId", recordController.getOneRecord);

router.post("/", recordController.createNewRecord);

// router.patch("/:workoutId", recordController.updateOneWorkout);

// router.delete("/:workoutId", recordController.deleteOneWorkout);

module.exports = router;