import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { InitialService } from './initial.service';
import { User } from './initial.model';

const api = 'https://reqres.in/api/users/2';

@NgModule({
	imports: [
		CommonModule,
    HttpClientModule
	],
	providers: [
		// Crear el provider con el InjectionToken APP_INITIALIZER
	]
})
export class InitialModule {}

export function init(_injector: Injector){
  // Recueperar el usuario, guardarlo en el servicio y permitir que la app arranque.
}

