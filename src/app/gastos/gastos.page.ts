import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';


@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  gastos : any = [];
  limit : number = 10;
  start : number = 0;
  item: string = "";
 
   constructor(private router: Router,  private provider: PostProvider ) { }
 
   ionViewWillEnter(){
     this.gastos = [];
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
 
   Voltar(){
    this.router.navigate(['/home'])
  }
   addGastos(){
     this.router.navigate(['/add-gastos'])
   }
 
   editar(id, item, valor){
     this.router.navigate(['/add-gastos/' + id + '/' + item + '/' + valor]);
   }
 

 
 
   carregar(){
     return new Promise(resolve => {
       let dados = {
         requisicao : 'getdata',
         limit : this.limit,
         start : this.start
        
       };
       this.provider.inserirApi(dados, 'inserirGastos.php').subscribe(data => {
         for(let gasto of data['result']){
           this.gastos.push(gasto);
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
 
   this.provider.inserirApi(dados, 'inserirGastos.php').subscribe(data => {
     this.ionViewWillEnter();
     
   });
   
 }
 
 
 
 
 }
 