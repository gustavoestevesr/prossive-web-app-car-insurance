import { SeguroService } from 'src/app/services/seguro.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarro } from 'src/app/models/ICarro';
import { IProprietario } from 'src/app/models/IProprietario';
import { SeguroModel } from 'src/app/models/SeguroModel';
import { CarroService } from './../../services/carro.service';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.scss'],
})
export class CadastroSeguroComponent implements OnInit {
  public seguro = new SeguroModel({} as ICarro, {} as IProprietario);
  public marcasCarros$!: Observable<ICarro[]>;

  constructor(private carroService: CarroService, private seguroService: SeguroService) {}

  ngOnInit(): void {
    this.marcasCarros$ = this.carroService.getMarcas();
    console.log(this.marcasCarros$);
  }

  cadastrar() {
    this.seguroService.cadastrar(this.seguro);
  }

  enviarNotificacao() {}
}
