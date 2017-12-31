import { Subject } from 'rxjs/Subject';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
require('mongoose-type-email');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// ContactSchema.method({
// });


// ContactSchema.statics = {
 
// };

export default mongoose.model('Contact', ContactSchema);
