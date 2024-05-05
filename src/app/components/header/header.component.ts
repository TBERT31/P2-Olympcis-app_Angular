import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailContextService } from 'src/app/core/services/detailContext.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public idDetail: number; // Utile pour la navigation vers la page de détail
  private subscription: Subscription; 

  constructor(
    private detailContextService : DetailContextService
  ) { }

  ngOnInit(): void {
    // Lors de l'inialisation du header, on s'abonne à l'obervable du service detailContextService.
    this.subscription = this.detailContextService.idDetail$.subscribe(id => {
      this.idDetail = id; // Permet de faire correspondre idDetail du header à idDetailSource du detailContextService
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Désabonnement après destruction du composant, pour éviter les fuites de mémoires.
  }
}
