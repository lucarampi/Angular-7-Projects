import { Component, OnInit } from '@angular/core';
import { Historic } from 'src/app/shared/historic.model';
import { HistoricService } from './historic.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {
  historic:Historic[]
  constructor(private historicService:HistoricService) { }

  ngOnInit(): void {
  this.historic = this.readLocalStorage()
  }

  readLocalStorage():Historic[]{
    return this.historicService.readLocaStorage()
  }

}
