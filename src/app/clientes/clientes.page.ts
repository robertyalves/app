import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

 clientes : any = [];
 limit : number = 10;
 start : number = 0;
 nome: string = "";

  constructor(private router: Router,  private provider: PostProvider ) { }

  ionViewWillEnter(){
    this.clientes = [];
    this.start = 0;
    this.carregar();
  }


  //atualizar o list view

  doRefresh(event) {
    
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }


//barra de rolagem
loadData(event) {
  
    this.start += this.limit;

    setTimeout(() => {
      this.carregar().then(()=>{ 
        event.target.complete();
       });
     
    }, 500);
    
  
}


  ngOnInit() {
  
  }

  addCliente(){
    this.router.navigate(['/add-cliente'])
  }

  editar(id, nome, telefone, email){
    this.router.navigate(['/add-cliente/' + id + '/' + nome + '/' + telefone + '/' + email]);
  }

  mostrar(id, nome, telefone, email){
    this.router.navigate(['/mostrar-cliente/' + id + '/' + nome + '/' + telefone + '/' + email]);
  }


  carregar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'getdata',
        limit : this.limit,
        start : this.start
       
      };
      this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
        for(let cliente of data['result']){
          this.clientes.push(cliente);
        }
        resolve(true);
      });

    });

  }


  buscar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'buscar',
        nome: this.nome,
       
      };
      this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
        this.clientes = [];
        for(let cliente of data['result']){
          this.clientes.push(cliente);
        }
        resolve(true);
      });

    });

  }



excluir(id){
  let dados = {
    requisicao : 'excluir',
    id : id    
   
  };

  this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
    this.ionViewWillEnter();
    
  });
  
}




}
