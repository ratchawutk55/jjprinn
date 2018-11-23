import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/service/mock.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Array<any>;
  constructor(private service: MockService) { }

  ngOnInit() {
    this.cars = this.service.getMock();
  }

}
