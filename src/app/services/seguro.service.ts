import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguroModel } from '../models/SeguroModel';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private API_SEGUROS = 'http://localhost:9000'

  constructor(private httpClient: HttpClient) { }

  cadastrar(seguro: SeguroModel) {
    return this.httpClient.post(this.API_SEGUROS + '/api/seguros', seguro)
    .subscribe(
      () => alert('Seguro cadastrado com sucesso!')),
      (error: any) => alert('Seguro cadastrado com sucesso!')
  }

  /*listar() {
    return this.httpClient.get<SeguroModel[]>(this.API_SEGUROS + '/api/seguros');
  }*/
}
