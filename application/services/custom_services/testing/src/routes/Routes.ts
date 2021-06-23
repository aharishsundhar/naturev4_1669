import { Request, Response, NextFunction } from "express";
import { plantController } from '../controller/plantController';


export class Routes {
    private plant: plantController = new plantController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/plant').post(this.plant.GpCreate);
     }

}