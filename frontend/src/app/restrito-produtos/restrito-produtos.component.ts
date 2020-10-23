import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-restrito-produtos',
  templateUrl: './restrito-produtos.component.html',
  styleUrls: ['./restrito-produtos.component.css']
})
export class RestritoProdutosComponent implements OnInit {
  produtos : [];
  constructor() { }

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

  public delete(uuid) : void {
    console.log(uuid)
    axios({
      method: 'delete',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: `http://localhost:8080/produtos/${uuid}`,
    }).then( (response) => {
      // console.log(response.data);
      this.produtos = response.data;
      console.log(this.produtos);
      this.produtos = [];
      this.atualizaLista();
    });
  }



}
