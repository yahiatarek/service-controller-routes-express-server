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
/**
 * @openapi
 * /api/v1/records/:workoutId/records:
 *    get:
 *     tags:
 *       - Record for one workout
 *     parameters:
 *       - in: path
 *         workoutId: a24d2618-01d1-4682-9288-8de1343e53c7
 *         schema:
 *           type: string
 *         description: The workout of a record
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
 *                     $ref: "#/components/schemas/RecordWorkout"
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
router.get("/:workoutId/records", recordController.getRecordForWorkout);
/**
 * @openapi
 * /api/v1/records/:recordId:
 *    get:
 *     tags:
 *       - one Record
 *     parameters:
 *       - in: path
 *         recordId: 6275a9e07e3614b525bf8ffd
 *         schema:
 *           type: string
 *         description: One record
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
 *                     $ref: "#/components/schemas/RecordId"
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
router.get("/:recordId", recordController.getOneRecord);
/**
 * @openapi
 * /api/v1/records:
 *    post:
 *     tags:
 *       - create Record
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
 *                     $ref: "#/components/schemas/createRecord"
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
router.post("/", recordController.createNewRecord);
/**
 * @openapi
 * /api/v1/records/:recordId:
 *    get:
 *     tags:
 *       - update one Record
 *     parameters:
 *       - in: path
 *         recordId: 6275a9e07e3614b525bf8ffd
 *         schema:
 *           type: string
 *         description: One record
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
 *                     $ref: "#/components/schemas/updateOneRecord"
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
router.patch("/:recordId", recordController.updateOneRecord);
/**
 * @openapi
 * /api/v1/records/:recordId:
 *    get:
 *     tags:
 *       - one Record
 *     parameters:
 *       - in: path
 *         recordId: 6275a9e07e3614b525bf8ffd
 *         schema:
 *           type: string
 *         description: One record
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
 *                     $ref: "#/components/schemas/deleteOneRecord"
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
router.delete("/:recordId", recordController.deleteOneRecord);

module.exports = router;