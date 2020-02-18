import { Component, OnInit } from "@angular/core";

import { InitialService } from "./ejercicio/initial.service";
import { UserData } from "./ejercicio/initial.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Workshop 4";

  user: UserData;

  constructor(private _initialService: InitialService) {}

  ngOnInit() {
    this.user = this._initialService.getUser();
  }
}
