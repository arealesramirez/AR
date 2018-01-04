import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import contactCtrl from '../controllers/contact.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .post( validate(paramValidation.sendContact), contactCtrl.send);

export default router;
