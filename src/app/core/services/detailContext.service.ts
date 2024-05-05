import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
    Ce service sert à garder en mémoire, l'id du dernier pays pour lequel on s'est rendu dans la page détail.
    Cela permet d'avoir une navigation cohérente depuis la barre de navigation et évite de se rendre toujours
    sur le même pays depuis cette dernière.
*/
@Injectable({
  providedIn: 'root'  // Cette configuration assure que le service est un singleton
})
export class DetailContextService {
    private idDetailSource = new BehaviorSubject<number>(1);
    public idDetail$ = this.idDetailSource.asObservable();

    constructor() { }

    setIdDetail(value: number) {
        this.idDetailSource.next(value);
    }

    // getIdDetail() {
    //     return this.idDetailSource.getValue();
    // }
}
