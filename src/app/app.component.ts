import { Component } from '@angular/core';
import { CommonService } from './common.service';
declare var $:any;

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-projet-app';
  IsChangeLocation=false;
  TodayDate: Date;
  cityName: any;
  weatherData: any;

  constructor(private service:CommonService){
    this.TodayDate = new Date();
  }
  
  changeLocation(){
    debugger
    this.IsChangeLocation = this.IsChangeLocation==true?false:true;
  }

  getWeatherDataByCity(){
    debugger
    var city = $("#CityName").val();
    this.service.getWeatherData(city).subscribe(data=>{
      this.cityName = city;
      console.log('data',data)
      this.weatherData = data;
    })
  }
  transform(value: number): number {
    return Math.round(value);
  }
}
