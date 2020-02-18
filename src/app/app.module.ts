import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InitialModule } from './ejercicio/initial.module';

@NgModule({
	imports: [BrowserModule, InitialModule],
	declarations: [AppComponent, HelloComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
