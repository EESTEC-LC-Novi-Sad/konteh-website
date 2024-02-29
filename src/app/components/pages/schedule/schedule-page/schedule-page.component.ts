import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/model/schedule';

@Component({
  selector: 'schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})

export class SchedulePageComponent {

  schedule: Schedule = new Schedule();
  trackName: string = '';
  color: string = '';
  ngOnInit(): void {
    this.schedule = history.state.schedule;
    if(this.schedule.track === 'odiseja'){
      this.trackName = "Odiseja podataka: AI i ono što sledi";
      this.color = 'rgb(143, 179, 231)';
    } else if(this.schedule.track === 'autorobo'){
      this.trackName = "AutoRobo evolucija: Sledeća brzina";
      this.color = 'rgb(185, 37, 37)';
    } else if(this.schedule.track === 'igraliste'){
      this.trackName = "Igralište Inovatora: Tehnologija i trendovi";
      this.color = 'rgb(27, 56, 105)';
    } else if(this.schedule.track === 'kiber'){
      this.trackName = "KiberProstor: Poslednja granica";
      this.color = 'rgb(4, 5, 4)';
    }

  }

  lecturerTxt : String = this.schedule.type == "panel" ? "Panelisti" : "Predavači";
  descriptionTxt : String = this.schedule.type == "panel" ? "O temi" : "Sadržaj predavanja";
}
