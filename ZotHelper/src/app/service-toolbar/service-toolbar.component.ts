import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-toolbar',
  templateUrl: './service-toolbar.component.html',
  styleUrls: ['./service-toolbar.component.scss'],
})
export class ServiceToolbarComponent implements OnInit {

  @Input() calculateRoute: () => void;
  constructor() { }

  ngOnInit() {}

  navigateRoute(){
    console.log("hello");
    this.calculateRoute();
  }

}
