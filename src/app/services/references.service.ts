import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reference } from '../interfaces/reference.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReferencesService {
  constructor(private httpClient: HttpClient) {}
  private URL = 'http://localhost:3000';

  addBook(reference: Reference): Observable<Reference> {
    return this.httpClient.post<Reference>(
      `${this.URL}/reference/create`,
      reference
    );
  }

  getReferences(): Observable<Reference[]> {
    return this.httpClient.get<Reference[]>(`${this.URL}/references`);
  }
}
