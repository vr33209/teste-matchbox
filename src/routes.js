const { Router } = require('express');
const CandidateController = require('./controllers/CandidateController')
const RegisterJobsController = require('./controllers/RegisterJobs')
const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const auth = require('./middlewares/auth')

const routes = Router();
routes.post('/user', UserController.create);
routes.post('/session', SessionController.create);
routes.use(auth)
routes.get('/users', UserController.users);
routes.delete('/user/:_id', UserController.remove);
routes.put('/user/:_id', UserController.update);
routes.post('/candidate', CandidateController.create);
routes.get('/candidates', CandidateController.candidates);
routes.delete('/candidate/:_id', CandidateController.remove);
routes.put('/candidate/:_id', CandidateController.update);
routes.post('/job', RegisterJobsController.create);
routes.get('/jobs', RegisterJobsController.jobs);
routes.delete('/job/:_id', RegisterJobsController.remove);
routes.put('/job/:_id', RegisterJobsController.update);
routes.post('/jobAssign', RegisterJobsController.toAssignCandidate);

module.exports = routes;  