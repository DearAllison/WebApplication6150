import express from "express";
import * as remindersController from './../controllers/reminder-controller.js';

/**
 * Routes of reminder items(APIs)
 */

const router = express.Router();

router.route('/reminder')
    .post(remindersController.post)
    .get(remindersController.index);

router.route('/reminder/:id')
    .get(remindersController.get)
    .put(remindersController.update)
    .delete(remindersController.remove);


export default router;