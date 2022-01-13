import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private weatherservice:ServicesService) { }
  lat:any;
  lon:any;
  weather:any;
  w:any;
  l:any

  ngOnInit(): void {
    this.getlocation()
  }
  
  getlocation()
  {
    if('geolocation' in navigator)
    {
      navigator.geolocation.watchPosition((sucess)=>
      {
        this.lat = sucess.coords.latitude
        this.lon = sucess.coords.longitude

        this.weatherservice.getweatherdatabycordinates(this.lat , this.lon).subscribe(data =>
          {
            this.weather = data;
          })
      })
    }
  }

  get5days(city:string)
  {
    this.weatherservice.days5(city).subscribe(data=>
      {
        this.w= data;
      })
  }

  getcity(city:string)
  {
    this.weatherservice.getweatherdatabycityname(city).subscribe(data =>
      {
        this.weather = data;
      })
  }
  
}
function city(city: any, String: StringConstructor): string {
  throw new Error('Function not implemented.');
}

