import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoLightboxComponent } from '../photo-lightbox/photo-lightbox.component';

@Component({
  selector: 'square-image',
  templateUrl: './square-image.component.html',
  styleUrls: ['./square-image.component.scss'],
})
export class SquareImageComponent {
  @Input() imgSrc = '';

  constructor(public dialog: MatDialog) {}

  openImageLightbox() {
    this.dialog.open(PhotoLightboxComponent, {
      data: { imgData: this.imgSrc },
    });
  }
}
