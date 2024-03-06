import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICarro } from '../models/ICarro';

interface CarResponse {
  Makes: Array<Car>;
}

interface Car {
  make_id: string;
  make_display: string;
  make_is_common: number;
  make_country: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  private API_CARROS =
    'https://www.carqueryapi.com/api/0.3/?callback=%3F&cmd=getMakes';

  constructor(private httpClient: HttpClient) {}

  private mapMarcas(marcas: Array<any>): ICarro[] {
    return marcas.map((marca: Car) => ({
      codigo: marca.make_id,
      nome: marca.make_display,
      marca: '',
      modelo: '',
      placa: '',
    }));
  }

  getMarcas(): Observable<ICarro[]> {
    // jsonp - Permite fazer consultas externas, evitando o bloqueio do CORS
    return this.httpClient
      .jsonp(this.API_CARROS, 'callback')
      .pipe(map((res: any) => this.mapMarcas(res.Makes)));
  }
}
