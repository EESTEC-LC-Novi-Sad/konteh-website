import { Component, Input } from '@angular/core';

@Component({
  selector: 'lecturer-card',
  templateUrl: './lecturer-card.component.html',
  styleUrls: ['./lecturer-card.component.scss']
})
export class LecturerCardComponent {
  @Input() lecturer: any;
  @Input() idx: number = 0;

  align = "left";

  ngOnInit(): void {
    this.align = this.idx%2 === 0 ? "right" : "left";
  }
}
