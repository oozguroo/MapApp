import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PointsComponent } from './points/points.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';




@NgModule({
  declarations: [
    AppComponent,
    PointsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
