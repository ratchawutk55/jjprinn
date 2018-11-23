import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from 'src/app/service/mock.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: MockService) { }
  car: any;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const car = this.service.getMock()
      .filter(car => car.id.toString() == id);
    console.log(car[0]);
    this.car = car[0];
  }

}
