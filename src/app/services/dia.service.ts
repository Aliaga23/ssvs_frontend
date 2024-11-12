import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dia } from '../models/dia.model';

@Injectable({
  providedIn: 'root'
})
export class DiaService {
  private apiUrl = 'https://ssvsbackend-production.up.railway.app/api/dias';

  constructor(private http: HttpClient) {}

  getAllDias(): Observable<Dia[]> {
    return this.http.get<Dia[]>(this.apiUrl);
  }
}