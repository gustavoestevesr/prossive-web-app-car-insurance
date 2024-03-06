import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguroModel } from 'src/app/models/SeguroModel';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-listar-seguro',
  templateUrl: './listar-seguro.component.html',
  styleUrls: ['./listar-seguro.component.scss']
})
export class ListarSeguroComponent implements OnInit {
  public seguros$!: Observable<SeguroModel[]>;

  constructor(private seguroService: SeguroService) { }

  ngOnInit() {
    this.seguros$ = this.seguroService.listar();
  }
}
