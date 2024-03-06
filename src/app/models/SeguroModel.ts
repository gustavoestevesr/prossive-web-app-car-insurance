import { ICarro } from './ICarro';
import { IProprietario } from './IProprietario';

export class SeguroModel {
  carro: ICarro;
  proprietario: IProprietario;

  constructor(carro: ICarro, proprietario: IProprietario) {
    this.carro = carro;
    this.proprietario = proprietario;
  }
}
