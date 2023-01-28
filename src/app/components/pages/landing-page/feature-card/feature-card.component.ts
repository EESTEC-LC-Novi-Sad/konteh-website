import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent implements OnInit {
  @Input() imgUrl = '';
  @Input() title = 'Title';
  @Input() description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis magna sed odio ultricies placerat ac varius turpis. Cras mollis nibh ac posuere sollicitudin. ';

  ngOnInit(): void {}
}
