import { Component, OnInit, OnDestroy } from '@angular/core';
import { take } from 'rxjs';
import { OlympicService } from './core/services/olympic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(
    private olympicService: OlympicService
  ) {}

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.olympicService.loadInitialData()
      .pipe(take(1))
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
