import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllServicesService {
  mensagem = window.speechSynthesis.cancel();

  constructor(private http: HttpClient) {}

  getResumo(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/resumo',
      themes
    );
  }

  corretorRedacao(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/corretor-redacao',
      themes
    );
  }

  questaoEnem(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/pergunta-enem',
      themes
    );
  }

  respEnem(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/resposta-enem',
      themes
    );
  }

  getLudico(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/ludico',
      themes
    );
  }

  getCausa(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/causa',
      themes
    );
  }

  getConseq(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/consequencia',
      themes
    );
  }

  getCarac(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/caracteristica',
      themes
    );
  }

  getCurious(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/curiosidade',
      themes
    );
  }

  getRelato(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/relato',
      themes
    );
  }

  getFontesEstudo(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/fonte-estudos',
      themes
    );
  }

  getCronogramaAluno(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/cronograma-aluno',
      themes
    );
  }

  getCronogramaProfessor(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/cronograma-professor',
      themes
    );
  }

  getCronogramaProfessorDetalhado(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/cronograma-professor-detalhado',
      themes
    );
  }

  getTopicos(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/topicos',
      themes
    );
  }

  getExercicio(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/exercicio-aluno',
      themes
    );
  }

  getRespostas(body: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/resposta',
      body
    );
  }

  chat(body: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/chat',
      body
    );
  }

  getImage(themes: any): Observable<any> {
    return this.http.post<any>(
      'https://back-uducai-production.up.railway.app/imagem',
      themes
    );
  }
}
