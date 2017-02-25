import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  event_one:any[]

  constructor(private eventService: EventService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.event_one = this.activatedRoute.snapshot.data['events']
    // this.event_one = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }

}
