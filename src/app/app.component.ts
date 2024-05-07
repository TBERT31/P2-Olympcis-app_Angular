import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { OlympicService } from './core/services/olympic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  constructor(
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData().pipe(take(1)).subscribe();
  }
  /*
     L'opérateur take(1) garantit que l'observable complète 
     après avoir émis une seule valeur, ce qui implique qu'il n'est pas nécessaire de se désabonner à l'observable dans ngOnDestroy,
     car le flux de données s'arrêtera de lui-même après cette unique émission. 
  */
}
