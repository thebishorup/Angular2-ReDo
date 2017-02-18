import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  event_one = {
    id: 1,
    name: 'Angular Connect',
    date: '02/10/2017',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '',
    location: {
      address: '100 Main Street',
      city: 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
