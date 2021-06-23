import { Request, Response } from 'express';
import { plantService } from '../service/plantService';
import { CustomLogger } from '../config/Logger'
let plant = new plantService();

export class plantController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
plant.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into plantController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from plantController.ts: GpCreate');
    })}


}