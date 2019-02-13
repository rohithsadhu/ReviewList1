import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HttpClient, HttpParams, HttpHandler, HttpClientModule } from '@angular/common/http';
//import {RequestOptions} from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    //RequestOptions,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
