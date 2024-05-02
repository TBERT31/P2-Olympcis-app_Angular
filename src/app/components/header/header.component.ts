import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailContextService } from 'src/app/core/services/detailContext.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public idDetail: number;
  private subscription: Subscription;

  constructor(
    private detailContextService : DetailContextService
  ) { }

  ngOnInit(): void {
    this.subscription = this.detailContextService.idDetail$.subscribe(id => {
      this.idDetail = id;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
