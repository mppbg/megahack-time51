import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from './event';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  events: Event[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
