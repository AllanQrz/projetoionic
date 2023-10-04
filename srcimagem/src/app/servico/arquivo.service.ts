import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




export interface Arquivo {
  id: string;
  nome: string;
  path: string;
  data_upload: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  private url = 'http://localhost/upload/imagem';

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<[Arquivo]>(this.url);
  }
}
