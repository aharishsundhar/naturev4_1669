import { Component, OnInit } from '@angular/core';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})

export class PlantsComponent implements OnInit {
    public plant = {
        plant_name: '',
    }

    constructor (
        private plantsService: PlantsService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.plantsService.GpCreate(this.plant).subscribe(data => {
            this.plant.plant_name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}