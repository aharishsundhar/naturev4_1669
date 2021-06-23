
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const plantSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   plant_name: String
})

const plantModel = mongoose.model('plant', plantSchema, 'plant');
export default plantModel;
