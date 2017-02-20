import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  // selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:any

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEventById(1)
  }

}
