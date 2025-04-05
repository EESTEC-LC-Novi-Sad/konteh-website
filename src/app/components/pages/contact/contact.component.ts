import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Coordinator } from 'src/app/model/coordinator';
import { CoordinatorService } from 'src/app/services/coordinator.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;

    video.muted = true; // Critical in some browsers
    video.setAttribute('playsinline', 'true');
    video.setAttribute('muted', 'true'); // also attribute
    video.setAttribute('autoplay', 'true'); // safety net

    video.load(); // reinitialize

    video.play().then(() => {
      console.log('Video autoplayed');
    }).catch(err => {
      console.warn('Autoplay blocked, waiting for user interaction:', err);
      this.setupFallbackAutoplay(video);
    });
  }
  setupFallbackAutoplay(video: HTMLVideoElement) {
    const tryPlay = () => {
      video.play().catch(err => console.warn('Still failed to play:', err));
      document.removeEventListener('click', tryPlay);
    };

    document.addEventListener('click', tryPlay);
  }


  coordinators: Coordinator[] = [];

  constructor(
    private router: Router,
    private coordinatorService: CoordinatorService
  ) {}

  ngOnInit(): void {
    this.coordinatorService.getAllCoordinators().subscribe((data) => {
      if (data != null) {
        let coordinators: Coordinator[] = [];
        coordinators = this.coordinatorService.convertDataToCoordinators(data);

        this.coordinators = coordinators.sort((a, b) => {
          if (a.position == 'Glavni organizator') {
            return -1;
          } else if (a.position == 'Koordinator za odnose sa kompanijama') {
            return -1;
          } else {
            return 1;
          }
        });
      }
    });
  }

  openMail() {
    window.open('mailto:konteh@eestecns.org', '_blank');
  }
}
