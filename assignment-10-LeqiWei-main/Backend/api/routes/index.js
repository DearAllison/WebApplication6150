import remindersRouter from './reminder-router.js';

export default (app) => {
    app.use('/', remindersRouter);
}