import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialService } from './initial.service';

@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		{
			provide: InitialService,
			useClass: InitialService
		}
	]
})
export class InitialModule {}
