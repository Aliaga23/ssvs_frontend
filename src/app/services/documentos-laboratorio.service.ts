// src/app/services/documentos-laboratorio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentosLaboratorio } from '../models/documentos-laboratorio.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentosLaboratorioService {
  private apiUrl = 'https://ssvsbackend-production.up.railway.app/api/documentos-laboratorio';
  private laboratoriosUrl = 'https://ssvsbackend-production.up.railway.app/api/laboratorio'; // Endpoint para cargar laboratorios

  constructor(private http: HttpClient) {}

  getAllDocumentos(): Observable<DocumentosLaboratorio[]> {
    return this.http.get<DocumentosLaboratorio[]>(this.apiUrl);
  }

  getLaboratorios(): Observable<any[]> {
    return this.http.get<any[]>(this.laboratoriosUrl);
  }

  createDocumento(documento: DocumentosLaboratorio): Observable<void> {
    return this.http.post<void>(this.apiUrl, documento);
  }
}