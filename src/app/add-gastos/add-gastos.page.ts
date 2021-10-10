import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-gasto',
  templateUrl: './add-gastos.page.html',
  styleUrls: ['./add-gastos.page.scss'],
})
export class AddGastosPage implements OnInit {

  item: string = "";
  valor: string = "";
  id: number;

  constructor(
    private router: Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRoute: ActivatedRoute
  ) { }

 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Dados Salvo',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  
  
  ngOnInit() {
    this.actRoute.params.subscribe((data: any)=>{
      this.id = data.id;
      this.item = data.item;
      this.valor = data.valor;
      console.log(data);
    });
  }

  Voltar(){
    this.router.navigate(['/gastos'])
  }
  Gastos(){
    this.router.navigate(['/gastos'])
  }

  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'add',
        item: this.item,
        valor: this.valor
      };
      this.provider.inserirApi(dados, 'inserirGastos.php')
      .subscribe(data => {
       
        this.router.navigate(['/gastos']);
        this.presentToast();
      });
     
     

    });
  }


  editar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editar',
        item: this.item,
        valor: this.valor,
        id: this.id
      };
      this.provider.inserirApi(dados, 'inserirGastos.php')
      .subscribe(data => {
       
        this.router.navigate(['/gastos']);
        this.presentToast();
      });
     
     

    });
  }



}
