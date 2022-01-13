import { NgForOf } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule, HttpParams,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  serviceUrl = 'https://api.openweathermap.org/data/2.5/weather'
  url2='api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}'
  apiKey  = 'b190a0605344cc4f3af08d0dd473dd25'
  constructor(private http:HttpClient) { }

  getweatherdatabycordinates(lat:any, lon:any)
  {
    let params = new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('unit','aperial')
    .set('appid',this.apiKey)
    
    return this.http.get(this.serviceUrl,{params});
  }
  
  getweatherdatabycityname(city : string)
  {
    let params = new HttpParams()
    .set('q',city)
    .set('unit','imperial')
    .set('appid',this.apiKey)


    return this.http.get(this.serviceUrl,{params})
  }

  days5(city:string)
  {
    let params = new HttpParams()
    .set('q',city)
    .set('unit','imperial')
    .set('appid',this.apiKey)

    return this.http.get(this.url2, {params})
  }
 

  
  
  
}
