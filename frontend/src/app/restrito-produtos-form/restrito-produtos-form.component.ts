import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-restrito-produtos-form',
  templateUrl: './restrito-produtos-form.component.html',
  styleUrls: ['./restrito-produtos-form.component.css']
})
export class RestritoProdutosFormComponent implements OnInit {
  nome : null;
  imagem : null;
  descricao : null;
  valor : null;
  produtoId : null;
  urlRequisicao : string = 'http://localhost:8080/produtos/';
  
  constructor(private route: ActivatedRoute ) { this.route.params.subscribe(params => this.produtoId = params['uuid']);}

  ngOnInit(): void {
    if (this.produtoId !== null && this.produtoId !== undefined) {
      this.urlRequisicao = `http://localhost:8080/produtos/${this.produtoId}`;
      console.log(this.produtoId);
      axios({
        method: 'get',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: `http://localhost:8080/produtos/${this.produtoId}`,
      }).then( (response) => {
        this.nome = response.data[0].nome;
        this.descricao = response.data[0].descricao;
        this.imagem = response.data[0].imagem;
        this.valor = response.data[0].valor;
  
      });
    }
  }

  redirectBack() : void {
    location.href = 'http://localhost:4200/restrito/produtos/';
  }

  submit(): void {
    axios({
      method: (this.produtoId !== null && this.produtoId !== undefined) ? 'put' : 'post',
      headers: { 'Content-Type': 'application/json' },
      data: {
        "nome" : this.nome,
        "descricao" : this.descricao,
        "imagem" : this.imagem,
        "valor" : this.valor
      },
      url: this.urlRequisicao,
    }).then( (response) => {
      console.log(response);;
      location.href = 'http://localhost:4200/restrito/produtos/';
    });
  }
}
