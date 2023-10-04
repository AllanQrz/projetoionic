import { Component, OnInit } from '@angular/core';
import { Arquivo, ArquivoService } from '../servico/arquivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  arquivos: Arquivo[] = [];

  constructor(private service: ArquivoService) {}
  ngOnInit() {
    this.service.getAll().subscribe(response =>{
      this.arquivos = response;
    })
  }

}
