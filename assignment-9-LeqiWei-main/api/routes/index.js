import reminderRouter from './reminder-router.js';

export default (app) => {
    app.use('/', reminderRouter);
}