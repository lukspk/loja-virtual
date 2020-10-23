// import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
// import {Http, Headers} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  produtos : [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    axios({
      method: 'get',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: 'http://localhost:8080/produtos',
    }).then( (response) => {
      // console.log(response.data);
      this.produtos = response.data;
      console.log(this.produtos);
    });

    // this.http.get("localhost:8080/produtos").
    // console.log();
    // return this.http.get('http://localhost:3000/api/clients')
    //         .map(res => res.json());
    // }
  }

}
