import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PostProvider{
    server: string = "http://testeapiionic-com-br.umbler.net/";

    constructor(private http : HttpClient){

    }

    inserirApi(dados: any, api: string){

        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          };
       
            let url = this.server + api ;
           return this.http.post(url, JSON.stringify(dados), httpOptions)
            .map(res => res);
       
    
  }


  
}