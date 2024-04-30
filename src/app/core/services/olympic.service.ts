import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Olympic } from '../models/Olympic.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {

        // TODO: improve error handling
        console.error(error);

        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next(null);

        return caught;
      })
    );
  }

  // Renvoie un Observable contenant tous les Olympics de la liste
  getOlympics() {
    return this.olympics$.asObservable();
  }

  // Renvoie un unique Olympic correspondant à l'id communiqué en paramètre
  getOlympicById(id: number): Observable<Olympic | undefined> {
    return this.olympics$.pipe(
      map(olympics => olympics?.find(o => o.id === id))
    );
  }

  // Renvoie un unique Olympic correspondant au pays communiqué en paramètre
  getOlympicByCountry(country: string): Observable<Olympic | undefined> {
    return this.olympics$.pipe(
      map(olympics => olympics?.find(o => o.country.toLowerCase() === country.toLowerCase()))
    );
  }
}
