import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

    getIdDetail() {
        return this.idDetailSource.getValue();
    }
}
