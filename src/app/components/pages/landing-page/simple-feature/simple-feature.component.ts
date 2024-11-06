import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-feature',
  templateUrl: './simple-feature.component.html',
  styleUrls: ['./simple-feature.component.scss']
})
export class SimpleFeatureComponent {
  @Input() imgUrl = '';
  @Input() title = 'Title';
  @Input() description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis magna sed odio ultricies placerat ac varius turpis. Cras mollis nibh ac posuere sollicitudin. ';


}
