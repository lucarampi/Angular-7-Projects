import { Injectable } from '@angular/core';
import { Historic } from 'src/app/shared/historic.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  constructor() { }

  readLocaStorage():Historic[]{
    return localStorage['historic'] ? JSON.parse(localStorage['historic']) : [];
  }
}
