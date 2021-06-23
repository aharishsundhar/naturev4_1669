import * as mongoose from 'mongoose';
import plantModel from '../models/plant';
import { CustomLogger } from '../config/Logger'


export class plantDao {
    private plant = plantModel;
    constructor() { }
public GpCreate(plantData, callback){
new CustomLogger().showLogger('info', 'Enter into plantDao.ts: GpCreate')
let temp = new plantModel(plantData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from plantDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}