import { Request, Response } from 'express';
import {plantDao} from '../dao/plantDao';
import { CustomLogger } from '../config/Logger'
let plant = new plantDao();

export class plantService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into plantService.ts: GpCreate')
     const  plantData = req.body;
     plant.GpCreate(plantData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from plantService.ts: GpCreate')
         callback(response);
         });
    }


}