import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  api = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  getList():Observable<any>{
    return this.http.get<any>(this.api);
  }
}
