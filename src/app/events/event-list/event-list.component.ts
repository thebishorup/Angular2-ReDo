import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  event_one:any[]

  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.event_one = this.eventService.getEvents()
  }

}
