import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private acreNos = ['1', '2', '3', '4'];

  constructor() { }

  getAcreNos(): string[] {
    return this.acreNos;
  }

}
