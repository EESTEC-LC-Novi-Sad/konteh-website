import { Component } from '@angular/core';
import { Schedule } from 'src/app/model/schedule';

@Component({
  selector: 'schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent {


  schedule = {
    id: 1,
    type: "Panel diskusija",
    name: 'Test Schedule',
    startDate: new Date(),
    endDate: new Date().setHours(new Date().getHours() + 1),
    location: 'Test Location',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
    lecturers: [
      {
        name: 'John Doe',
        company: {
          name: 'Test Company',
        },
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ."
        ,photo: "/assets/konteh6.jpg"

      },
      {
        name: 'John Doe',
        company: {
          name: 'Test Company',
        },
        biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ."
        ,photo: "/assets/konteh6.jpg"

      },
    ]
  }

  lecturerTxt : String = this.schedule.type == "Panel diskusija" ? "Panelisti" : "Više o predavačima";
  descriptionTxt : String = this.schedule.type == "Panel diskusija" ? "O temi" : "Sadržaj predavanja";

}
