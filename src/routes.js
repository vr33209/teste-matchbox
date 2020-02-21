import { Router } from 'express';
import CandidateController from './controllers/CandidateController'
import RegisterJobsController from './controllers/RegisterJobs'
import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import auth from './middlewares/auth'
import acess from './middlewares/acess'

const routes = Router();
routes.post('/user', UserController.create);
routes.post('/session', SessionController.create);
routes.use(auth)
routes.put('/user/:_id', UserController.update);
routes.post('/candidate', CandidateController.create);
routes.delete('/candidate/:_id', CandidateController.remove);
routes.put('/candidate/:_id', CandidateController.update);
routes.use(acess)
routes.get('/candidates', CandidateController.candidates);
routes.get('/users', UserController.users);
routes.delete('/user/:_id', UserController.remove);
routes.post('/job', RegisterJobsController.create);
routes.get('/jobs', RegisterJobsController.jobs);
routes.delete('/job/:_id', RegisterJobsController.remove);
routes.put('/job/:_id', RegisterJobsController.update);
routes.post('/jobAssign', RegisterJobsController.toAssignCandidate);

export default  routes;  