import {Router} from 'express';
import * as EventsController from '../controllers/events';
import * as PublicationsController from '../controllers/publications';
import * as InformationsController from '../controllers/informations';
import * as ArticleController from '../controllers/article';

const router = Router();

router.get('/',EventsController.events)

export default router;