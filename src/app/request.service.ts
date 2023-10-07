import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllServicesService {
  constructor(private http: HttpClient) {}

  getResumo(): Observable<any> {
    return this.http.get<any>('https://back-uducai-production.up.railway.app/resumo');
  }

  getLudico(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/ludico');
  }

  getCausa(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/causa');
  }

  getConseq(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/consequencia');
  }

  getCarac(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/caracteristica');
  }

  getCurious(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/curiosidade');
  }

  getRelato(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/relato');
  }

  getFontesEstudo(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/fonte-estudos');
  }

  getCronogramaAluno(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/cronograma-aluno');
  }

  getCronogramaProfessor(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/cronograma-professor');
  }

  getTopicos(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/topicos');
  }

  getExercicio(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/exercicio-aluno');
  }

  getRespostas(body: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/resposta', body);
  }

  chat(body: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/chat', body);
  }

  getImage(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/imagem');
  }
}
