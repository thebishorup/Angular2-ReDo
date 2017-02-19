import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any

  constructor() { }

  ngOnInit() {
  }

  getStartTimeClass() {
    if  (this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    return []
  }

}
