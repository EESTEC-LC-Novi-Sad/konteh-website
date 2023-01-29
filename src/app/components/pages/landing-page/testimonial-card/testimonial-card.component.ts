import { Component, Input } from '@angular/core';

@Component({
  selector: 'testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent {
  @Input() title = 'Title';
  @Input() center = false;
  @Input() name = 'John Smith';
  @Input() studentInfo = '1st year grad student';
  @Input() description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis magna sed odio ultricies placerat ac varius turpis. Cras mollis nibh ac posuere sollicitudin. ';
}
