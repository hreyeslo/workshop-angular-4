import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PrettyJsonModule} from 'angular2-prettyjson';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InitialModule } from './ejercicio/initial.module';

@NgModule({
	imports: [
    BrowserModule, 
    InitialModule,
    PrettyJsonModule
  ],
	declarations: [
    AppComponent, 
    HelloComponent
  ],
	bootstrap: [AppComponent]
})
export class AppModule {}
