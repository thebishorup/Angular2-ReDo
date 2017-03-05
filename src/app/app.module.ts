import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  EventDetailsComponent,
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventRouteActivatorService,
  EventListResolverService,
  CreateEventComponent
} from './events/index';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ToastrService } from './events/common/toastr.service';

import { appRoutes } from './routes';
import { Error404Component } from './events/error/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true
};
