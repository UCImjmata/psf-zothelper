import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import * as busIcon from "assests/icon/bus-stop-icon.png";


declare let google: any;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  map: any;
  serviceMarker: any;
  iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
  icons: Record<string, {icon: string}>= {
    Parking: {
      icon: "bus-stop-icon.png"
    },
    Bathroom: {
      icon: "toilet-icon.png"
    },
    water: {
      icon: "water-icon.png"
    }
  };


  constructor() {}

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 18,
        center: { lat: 33.645955, lng: -117.843142},
        disableDefaultUI: true
      });
    const currentLocationMarker = new google.maps.Marker({
      position: {lat: 33.646657, lng: -117.843475},
      map: this.map,
      title: 'Current Location'
      });
    currentLocationMarker.setMap(this.map);
  }

  displayService(service){
    if(this.serviceMarker){
      this.serviceMarker.setMap(null);
    }
    this.serviceMarker = new google.maps.Marker({
      position: service.latlng,
      icon: this.icons[service.title].icon,
      map: this.map,
      title: service.title
    });
    console.log(this.serviceMarker.title);
    this.serviceMarker.setMap(this.map);
  }


}
