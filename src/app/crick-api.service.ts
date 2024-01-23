import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CrickApiService {

  constructor(private http:HttpClient) { }

  getAllMatches(){

    return this.http.get(`${environment.apiUrl}/match/allmatches`)
  }

  getLiveMatches(){
    return this.http.get(`${environment.apiUrl}/match/live`)

  }

  getPointsTable(){
    return this.http.get(`${environment.apiUrl}/match/pointstable`)

  }
}
