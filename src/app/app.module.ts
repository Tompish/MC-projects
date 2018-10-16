import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/Forms';
import { BenchmarkComponent } from './benchmark.component';
import { PercentDirective } from './percent.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BenchmarkComponent,
    PercentDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
