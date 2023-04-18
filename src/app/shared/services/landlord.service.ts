import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthService } from './auth/jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LandlordService {
  api='http://rental.nucigent.co.in/backend/api/v1'
  constructor(private http:HttpClient,private jwt:JwtAuthService) { }

  getLandlordDetails(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      Authorization: `Bearer ${this.jwt.getJwtToken()}`,
    });
    console.log(this.jwt.getJwtToken())
    const requestOptions = { headers: headers };
    return this.http.get(this.api +'/landlords',requestOptions)
  }

 
}
