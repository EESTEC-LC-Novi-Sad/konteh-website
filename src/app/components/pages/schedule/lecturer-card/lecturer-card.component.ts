import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lecturer-card',
  templateUrl: './lecturer-card.component.html',
  styleUrls: ['./lecturer-card.component.scss']
})
export class LecturerCardComponent {
  @Input() lecturer: any;
  @Input() idx: number = 0;

  ngOnInit(): void {
    console.log(this.lecturer);
  }

} //Skontati sto se ne prikazuju predavaci????
