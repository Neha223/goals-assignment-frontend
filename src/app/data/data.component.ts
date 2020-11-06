import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(public restApi: ApiService) { }

  ngOnInit() {
    this.getData('pending');
  }
  getData(tab) {
    this.restApi.getData('pending').subscribe(data=> {

    })
  }

}
