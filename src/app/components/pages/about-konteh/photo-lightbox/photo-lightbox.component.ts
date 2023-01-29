import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'photo-lightbox',
  templateUrl: './photo-lightbox.component.html',
  styleUrls: ['./photo-lightbox.component.scss'],
})
export class PhotoLightboxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
