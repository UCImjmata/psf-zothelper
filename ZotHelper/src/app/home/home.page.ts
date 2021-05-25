import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare let google: any;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() {}

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(33.645955, -117.843142);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    new google.maps.Marker({
      position: {lat: 33.646657, lng: -117.843475},
      map: this.map,
      title: 'Current Location'
    });
  }

}
