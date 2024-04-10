import express from "express";
import * as reminderController from './../controllers/reminder-controller.js';

/**
 * Routes of reminder items(APIs)
 */

const router = express.Router();

router.route('/reminder')
    .post(reminderController.post)
    .get(reminderController.index);

router.route('/reminder/:id')
    .get(reminderController.get)
    .put(reminderController.update)
    .delete(reminderController.remove);


export default router;