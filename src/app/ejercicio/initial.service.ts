import { Injectable } from '@angular/core';
import { User, UserData } from './initial.model';

@Injectable({
  providedIn: 'root'
})
export class InitialService {

  private _user: UserData;

	constructor() { }

  setUser(user: User): void{
    this._user = user.data;
  }

  getUser(): UserData{
    return this._user;
  }
}
