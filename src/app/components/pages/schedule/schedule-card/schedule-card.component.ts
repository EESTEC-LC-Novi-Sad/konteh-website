import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from 'src/app/model/schedule';

@Component({
  selector: 'schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent {

  @Input() schedule: Schedule = new Schedule();
  color: string = '';
  trackName: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  route(){
    this.router.navigate(['/raspored/', this.schedule.id], { state: { schedule: this.schedule } });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
    });

    if(this.schedule.track === 'odiseja'){
      this.trackName = "Odiseja podataka: AI i ono što sledi";
      this.color = 'rgb(143, 179, 231)';
    } else if(this.schedule.track === 'autorobo'){
      this.trackName = "AutoRobo evolucija: Sledeća brzina";
      this.color = 'rgb(255,99,51)';
    } else if(this.schedule.track === 'igraliste'){
      this.trackName = "Igralište Inovatora: Tehnologija i trendovi";
      this.color = 'rgb(250,200,91)';
    } else if(this.schedule.track === 'kiber'){
      this.trackName = "KiberProstor: Poslednja granica";
      this.color = 'rgb(255,141,255)';
    }
  }

}
