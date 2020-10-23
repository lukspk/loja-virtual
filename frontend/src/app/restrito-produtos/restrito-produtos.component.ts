import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router'

@Component({
  selector: 'app-restrito-produtos',
  templateUrl: './restrito-produtos.component.html',
  styleUrls: ['./restrito-produtos.component.css']
})
export class RestritoProdutosComponent implements OnInit {
  router: Router;
  produtos : [];
  constructor(router: Router) {this.router = router; }

  atualizaLista() : void {
    axios({
      method: 'get',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: 'http://localhost:8080/produtos',
    }).then( (response) => {
      // console.log(response.data);
      this.produtos = response.data;
      console.log(this.produtos);
      
    });
  }
  ngOnInit(): void {
   this.atualizaLista();
  }

  redirectCadastrar() {
    location.href = "http://localhost:4200/restrito/produtos/create";
  }
  
  redirectEditar(uuid) : void {
    location.href = `http://localhost:4200/restrito/produtos/editar/${uuid}`;
  }

  public delete(uuid) : void {
    axios({
      method: 'delete',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: `http://localhost:8080/produtos/${uuid}`,
    }).then( (response) => {
      // this.produtos = response.data;

      this.produtos = [];
      this.atualizaLista();
    });
  }



}
