import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  personagens: Array<any> = [];

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.getList().subscribe(callApi =>{
      this.personagens = callApi.results;
      console.log(this.personagens)
    })
  }

}
