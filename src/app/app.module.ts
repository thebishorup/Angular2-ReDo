import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/services/event.service';
import { ToastrService } from './events/common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
