import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockService } from './service/mock.service';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
